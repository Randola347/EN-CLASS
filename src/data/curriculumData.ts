import type { CourseLesson } from '../types/curriculum';
import { A1_LESSONS } from './levels/a1Data';
import { A2_LESSONS } from './levels/a2Data';
import { B1_LESSONS } from './levels/b1Data';
import { B2_LESSONS } from './levels/b2Data';

export const COMPREHENSIVE_CURRICULUM: CourseLesson[] = [
  ...A1_LESSONS,
  ...A2_LESSONS,
  ...B1_LESSONS,
  ...B2_LESSONS
];
