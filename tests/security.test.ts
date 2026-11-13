import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import type { NextFunction, Request, Response } from 'express';
import {
  assertJwtSecret,
  cleanString,
  createRateLimit,
  isAllowedOrigin,
  isEmail,
  stringArray,
} from '../server/security';

describe('assertJwtSecret', () => {
  test('rechaza secretos ausentes, débiles o por defecto', () => {
    assert.throws(() => assertJwtSecret(undefined));
    assert.throws(() => assertJwtSecret(''));
    assert.throws(() => assertJwtSecret('secret123'));
    assert.throws(() => assertJwtSecret('corto'));
  });

  test('acepta un secreto de al menos 24 caracteres', () => {
    const secret = 'a'.repeat(24);
    assert.equal(assertJwtSecret(secret), secret);
  });
});

describe('isAllowedOrigin', () => {
  const allowlist = ['https://en-class.example.com'];

  test('permite orígenes de la allowlist, localhost y Vercel', () => {
    assert.equal(isAllowedOrigin(undefined, allowlist), true);
    assert.equal(isAllowedOrigin('https://en-class.example.com', allowlist), true);
    assert.equal(isAllowedOrigin('http://localhost:5173', allowlist), true);
    assert.equal(isAllowedOrigin('http://127.0.0.1:4173', allowlist), true);
    assert.equal(isAllowedOrigin('https://en-class.vercel.app', allowlist), true);
    assert.equal(isAllowedOrigin('https://preview-123.vercel.app', allowlist), true);
  });

  test('bloquea orígenes externos y trucos de subdominio', () => {
    assert.equal(isAllowedOrigin('https://evil.example.com', allowlist), false);
    assert.equal(isAllowedOrigin('https://vercel.app.evil.com', allowlist), false);
    assert.equal(isAllowedOrigin('https://evil-vercel.app', allowlist), false);
    assert.equal(isAllowedOrigin('file:///tmp/x', allowlist), false);
    assert.equal(isAllowedOrigin('no-es-una-url', allowlist), false);
  });
});

describe('cleanString', () => {
  test('recorta espacios y acepta texto válido', () => {
    assert.equal(cleanString('  hola  ', 10), 'hola');
  });

  test('rechaza valores vacíos, no string o demasiado largos', () => {
    assert.equal(cleanString('', 10), null);
    assert.equal(cleanString('   ', 10), null);
    assert.equal(cleanString(123, 10), null);
    assert.equal(cleanString('12345678901', 10), null);
  });
});

describe('isEmail', () => {
  test('acepta correos razonables', () => {
    assert.equal(isEmail('alumno@example.com'), true);
    assert.equal(isEmail('  alumno@example.com  '), true);
  });

  test('rechaza correos malformados o demasiado largos', () => {
    assert.equal(isEmail('sin-arroba'), false);
    assert.equal(isEmail('a@b'), false);
    assert.equal(isEmail('a b@example.com'), false);
    assert.equal(isEmail(`${'a'.repeat(250)}@example.com`), false);
    assert.equal(isEmail(42), false);
  });
});

describe('stringArray', () => {
  test('acepta arrays de strings y recorta cada elemento', () => {
    assert.deepEqual(stringArray([' uno ', 'dos']), ['uno', 'dos']);
    assert.deepEqual(stringArray(['x'.repeat(20)], 10, 5), ['xxxxx']);
  });

  test('rechaza arrays no válidos o demasiado grandes', () => {
    assert.equal(stringArray('no-array'), null);
    assert.equal(stringArray([1, 2]), null);
    assert.equal(stringArray(Array.from({ length: 11 }, () => 'x'), 10), null);
  });
});

describe('createRateLimit', () => {
  function mockReq(ip: string): Request {
    return { ip, socket: { remoteAddress: ip } } as unknown as Request;
  }

  function mockRes() {
    const state = { statusCode: 0, body: undefined as unknown };
    const res = {
      status(code: number) {
        state.statusCode = code;
        return this;
      },
      json(body: unknown) {
        state.body = body;
        return this;
      },
    } as unknown as Response;
    return { res, state };
  }

  test('permite hasta el máximo y luego responde 429', () => {
    const limiter = createRateLimit(60_000, 2);
    const req = mockReq('1.2.3.4');

    let nextCalls = 0;
    const next: NextFunction = () => {
      nextCalls += 1;
    };

    limiter(req, mockRes().res, next);
    limiter(req, mockRes().res, next);

    const blocked = mockRes();
    limiter(req, blocked.res, next);

    assert.equal(nextCalls, 2);
    assert.equal(blocked.state.statusCode, 429);
  });

  test('aísla el límite por IP', () => {
    const limiter = createRateLimit(60_000, 1);
    let nextCalls = 0;
    const next: NextFunction = () => {
      nextCalls += 1;
    };

    limiter(mockReq('1.1.1.1'), mockRes().res, next);
    limiter(mockReq('2.2.2.2'), mockRes().res, next);

    assert.equal(nextCalls, 2);
  });
});
