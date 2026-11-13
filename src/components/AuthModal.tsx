import React, { useState } from 'react';
import { LogIn, UserPlus, AlertCircle, X } from 'lucide-react';
import { apiJson } from '../config/api';

interface Props {
  onLoginSuccess: (token: string, user: any) => void;
  onClose?: () => void;
}

export const AuthModal: React.FC<Props> = ({ onLoginSuccess, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [level, setLevel] = useState<'A1' | 'A2' | 'B1' | 'B2'>('A1');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
    const payload = isRegister 
      ? { email, password, name, current_level: level }
      : { email, password };

    try {
      const data = await apiJson<{ token: string; user: any }>(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      onLoginSuccess(data.token, data.user);
      onClose?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error de conexión con el servidor');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = () => {
    setEmail('estudiante@enclass.com');
    setPassword('demo1234');
    setName('Carlos Méndez');
    setIsRegister(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 pt-12 sm:pt-8 max-w-md w-full max-h-[calc(100dvh-2rem)] overflow-y-auto no-scrollbar shadow-2xl relative">
        {/* Glow accent */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar y seguir sin cuenta"
            className="absolute top-3 right-3 z-10 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-amber-500 text-slate-950 font-black text-xl mb-3 shadow-lg shadow-indigo-500/20">
            EN
          </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white break-words">
                {isRegister ? 'Crea tu Cuenta de Estudio' : 'Bienvenido a EN-Class'}
              </h2>
          <p className="text-xs text-slate-400 mt-1">
            Plataforma de fluidez acelerada con PostgreSQL en Neon DB
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Nombre Completo</label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Ej. Roberto Gómez"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:border-indigo-500 outline-none transition"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Correo Electrónico</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:border-indigo-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Contraseña</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-base sm:text-sm text-white placeholder-slate-500 focus:border-indigo-500 outline-none transition"
            />
          </div>

          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Nivel Inicial</label>
              <div className="grid grid-cols-4 gap-2">
                {(['A1', 'A2', 'B1', 'B2'] as const).map(lvl => (
                  <button
                    type="button"
                    key={lvl}
                    onClick={() => setLevel(lvl)}
                    className={`py-2 rounded-xl text-xs font-bold border transition ${
                      level === lvl
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition flex items-center justify-center gap-2 text-sm disabled:opacity-60"
          >
            {loading ? (
              <span>Conectando a Neon DB...</span>
            ) : isRegister ? (
              <>
                <UserPlus className="w-4 h-4" />
                <span>Registrarme y Comenzar</span>
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                <span>Iniciar Sesión</span>
              </>
            )}
          </button>
        </form>

        {/* Acceso rápido solo en desarrollo */}
        {import.meta.env.DEV && (
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
            <span>Acceso rápido (solo desarrollo):</span>
            <button
              onClick={handleQuickDemo}
              className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 transition"
            >
              Rellenar demo alumno
            </button>
          </div>
        )}

        <div className="mt-4 text-center">
          <button
            onClick={() => {
              setIsRegister(!isRegister);
              setError(null);
            }}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition"
          >
            {isRegister 
              ? '¿Ya tienes cuenta? Inicia sesión aquí' 
              : '¿Nuevo alumno? Regístrate gratis aquí'}
          </button>
        </div>

        {onClose && (
          <div className="mt-3 text-center">
            <button
              type="button"
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-300 font-medium transition"
            >
              Seguir explorando sin cuenta
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
