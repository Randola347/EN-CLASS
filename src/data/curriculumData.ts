import type { CourseLesson } from '../types/curriculum';

export type CourseLevel = 'A1' | 'A2' | 'B1' | 'B2';

/**
 * Carga las lecciones de un nivel bajo demanda. Mantener cada nivel en su propio
 * import dinámico permite que Vite genere chunks separados y que el navegador
 * solo descargue el nivel que el alumno va a usar.
 */
export async function loadLessonsByLevel(level: CourseLevel): Promise<CourseLesson[]> {
  switch (level) {
    case 'A1':
      return (await import('./levels/a1Data')).A1_LESSONS;
    case 'A2':
      return (await import('./levels/a2Data')).A2_LESSONS;
    case 'B1':
      return (await import('./levels/b1Data')).B1_LESSONS;
    case 'B2':
      return (await import('./levels/b2Data')).B2_LESSONS;
  }
}
