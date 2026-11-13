import React, { useState, useEffect, lazy, Suspense } from 'react';
import { 
  Headphones, 
  Zap, 
  ShieldAlert, 
  UserCircle, 
  Flame,
  Award,
  BookOpen,
  LogOut,
  LogIn,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { StudentProfile } from './types';
import { TOTAL_LESSONS } from './data/curriculumMeta';
import { AuthModal } from './components/AuthModal';
import { apiFetch, apiJson } from './config/api';

// Las pestañas y paneles pesados se cargan bajo demanda. Así el bundle inicial
// no incluye las 20 lecciones completas ni los módulos que no se están usando.
const CurriculumHub = lazy(() =>
  import('./components/CurriculumHub').then((module) => ({ default: module.CurriculumHub }))
);
const RescueCenterHub = lazy(() =>
  import('./components/RescueCenterHub').then((module) => ({ default: module.RescueCenterHub }))
);
const MicroListeningModule = lazy(() =>
  import('./components/MicroListeningModule').then((module) => ({
    default: module.MicroListeningModule,
  }))
);
const ReflexTrainingModule = lazy(() =>
  import('./components/ReflexTrainingModule').then((module) => ({
    default: module.ReflexTrainingModule,
  }))
);
const StudentProfileModal = lazy(() =>
  import('./components/StudentProfileModal').then((module) => ({
    default: module.StudentProfileModal,
  }))
);
const AdminDashboard = lazy(() =>
  import('./components/AdminDashboard').then((module) => ({ default: module.AdminDashboard }))
);

export const App: React.FC = () => {
  const [authToken, setAuthToken] = useState<string | null>(() => localStorage.getItem('en_class_token'));
  const [currentUser, setCurrentUser] = useState<any>(() => {
    const saved = localStorage.getItem('en_class_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [activeTab, setActiveTab] = useState<'curriculum' | 'listening' | 'reflex' | 'rescue' | 'profile' | 'admin'>('curriculum');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  
  const [profile, setProfile] = useState<StudentProfile>({
    student_name: currentUser?.name || 'Estudiante',
    current_level: currentUser?.current_level || 'A1',
    target_level: 'B2',
    obstacles: [
      'Hesitación al hablar (traducción mental)',
      'Falta de fórmulas para preguntar cuando no sé una palabra'
    ],
    mastered_chunks: [
      "Could I get a...",
      "What do you mean by that?",
      "Let me think for a second...",
      "Pretty good, thanks! How about yourself?"
    ],
    error_bank: [],
    session_summary: "Sesión inicial en plataforma EN-Class.",
    streak_days: currentUser?.streak_days || 1,
    drills_completed: currentUser?.drills_completed || 0
  });

  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [savedAnswers, setSavedAnswers] = useState<Record<string, string>>({});
  const [lastPosition, setLastPosition] = useState<{ lessonId: string; step: string }>({
    lessonId: currentUser?.last_active_lesson_id || 'lesson-a1-1',
    step: currentUser?.last_active_step || 'theory'
  });

  // Sync profile and workbook answers from backend if logged in
  useEffect(() => {
    if (!authToken) return;

    apiJson('/api/student/profile', {
      headers: { 'Authorization': `Bearer ${authToken}` }
    })
      .then(data => {
        if (data.profile) {
          setProfile(prev => ({
            ...prev,
            ...data.profile,
            streak_days: data.user.streak_days,
            drills_completed: data.user.drills_completed
          }));
          if (data.profile.completed_lessons) {
            setCompletedLessons(data.profile.completed_lessons);
          }
          if (data.profile.last_active_lesson_id) {
            setLastPosition({
              lessonId: data.profile.last_active_lesson_id,
              step: data.profile.last_active_step || 'theory'
            });
          }
        }
        if (data.workbook_answers && Array.isArray(data.workbook_answers)) {
          const map: Record<string, string> = {};
          data.workbook_answers.forEach((ans: any) => {
            map[ans.question_id] = ans.user_text;
          });
          setSavedAnswers(map);
        }
      })
      .catch(console.error);
  }, [authToken]);

  const handleLoginSuccess = (token: string, user: any) => {
    setAuthToken(token);
    setCurrentUser(user);
    localStorage.setItem('en_class_token', token);
    localStorage.setItem('en_class_user', JSON.stringify(user));
    setAuthModalOpen(false);
  };

  const handleLogout = () => {
    setAuthToken(null);
    setCurrentUser(null);
    localStorage.removeItem('en_class_token');
    localStorage.removeItem('en_class_user');
    setActiveTab('profile');
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.85 }
    });
  };

  // Save exact position (last active lesson & step) to Neon DB
  const handleSavePosition = (lessonId: string, step: string) => {
    setLastPosition({ lessonId, step });
    if (!authToken) return;

    apiFetch('/api/student/position', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        last_active_lesson_id: lessonId,
        last_active_step: step
      })
    }).catch(console.error);
  };

  // Save workbook answers to Neon DB
  const handleSaveWorkbookAnswer = (lessonId: string, questionId: string, text: string) => {
    setSavedAnswers(prev => ({ ...prev, [questionId]: text }));

    if (!authToken) return;

    apiJson('/api/student/workbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        lesson_id: lessonId,
        question_id: questionId,
        user_text: text
      })
    })
      .then((data) => {
        if (typeof data.drills_completed === 'number') {
          setProfile(prev => ({ ...prev, drills_completed: data.drills_completed }));
        }
      })
      .catch(console.error);
  };

  const handleMarkLessonCompleted = (lessonId: string) => {
    if (completedLessons.includes(lessonId)) return;
    const updated = [...completedLessons, lessonId];
    setCompletedLessons(updated);
    triggerCelebration();

    if (authToken) {
      apiFetch('/api/student/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({
          completed_lessons: updated,
          session_summary: `Completada clase ${lessonId}`
        })
      }).catch(console.error);
    }
  };

  const handleCompleteDrill = (chunk: string, errorFeedback?: { error: string; correction: string }) => {
    const alreadyMastered = profile.mastered_chunks.includes(chunk);
    const newMastered = alreadyMastered ? profile.mastered_chunks : [...profile.mastered_chunks, chunk];

    let newErrorBank = profile.error_bank;
    if (errorFeedback) {
      newErrorBank = [
        {
          error: errorFeedback.error,
          correction: errorFeedback.correction,
          timestamp: new Date().toLocaleTimeString()
        },
        ...profile.error_bank.slice(0, 19)
      ];
    } else {
      triggerCelebration();
    }

    setProfile(prev => ({
      ...prev,
      mastered_chunks: newMastered,
      error_bank: newErrorBank,
      drills_completed: prev.drills_completed + 1
    }));

    if (!authToken) return;

    apiJson('/api/student/drill', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        chunk,
        drill_type: 'reflex',
        is_correct: !errorFeedback,
        error: errorFeedback?.error,
        correction: errorFeedback?.correction
      })
    })
      .then((data) => {
        if (typeof data.drills_completed === 'number') {
          setProfile(prev => ({ ...prev, drills_completed: data.drills_completed }));
        }
      })
      .catch(console.error);
  };

  const updateProfileFields = (updates: Partial<StudentProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans overflow-x-hidden">
      {/* El modal de acceso solo aparece cuando el usuario lo pide: la app se
          puede usar completa en modo invitado. */}
      {authModalOpen && (
        <AuthModal
          onLoginSuccess={handleLoginSuccess}
          onClose={() => setAuthModalOpen(false)}
        />
      )}

      {/* Top Navbar (Clean White & Blue Style) */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-40 shadow-xs">
        <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-2xl bg-blue-600 flex items-center justify-center font-black text-white text-base sm:text-lg shadow-sm shadow-blue-600/30">
              EN
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h1 className="font-bold text-slate-900 text-sm sm:text-base tracking-tight truncate">EN-Class Fluency</h1>
                <span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200 px-1.5 sm:px-2 py-0.5 rounded-full">
                  A1 ➔ B2
                </span>
                {currentUser?.role === 'admin' && (
                  <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200 px-1.5 sm:px-2 py-0.5 rounded-full">
                    Admin
                  </span>
                )}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 truncate">Test-English Method • Neon PostgreSQL</p>
            </div>
          </div>

          {/* Student Status Quick Widget */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs">
              <Flame className="w-4 h-4 text-amber-500 fill-current" />
              <span className="font-semibold text-slate-700">{profile.streak_days}d Racha</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs">
              <Award className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-slate-700">{profile.drills_completed} Respuestas</span>
            </div>

            {authToken ? (
              <>
                <button
                  onClick={() => setActiveTab('profile')}
                  className="flex items-center gap-1.5 sm:gap-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl px-2 sm:px-3 py-1.5 text-xs font-semibold text-blue-700 transition"
                >
                  <UserCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="hidden sm:inline max-w-[140px] truncate">{currentUser?.name || profile.student_name}</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="p-2 shrink-0 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 transition border border-slate-200"
                  title="Cerrar Sesión"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className="flex items-center gap-1.5 sm:gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-3 py-2 text-xs font-semibold text-white transition shadow-sm shadow-blue-600/20"
              >
                <LogIn className="w-4 h-4 shrink-0" />
                <span>Iniciar sesión</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Navigation Sub-bar */}
      <nav className="bg-white border-b border-slate-200 px-2 sm:px-4">
        <div className="max-w-full xl:max-w-5xl mx-auto flex items-center justify-start xl:justify-center gap-1 sm:gap-3 py-2.5 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`flex shrink-0 items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'curriculum'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Clases A1-B2 ({TOTAL_LESSONS} Clases)</span>
          </button>

          <button
            onClick={() => setActiveTab('listening')}
            className={`flex shrink-0 items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'listening'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>Micro-Listening</span>
          </button>

          <button
            onClick={() => setActiveTab('reflex')}
            className={`flex shrink-0 items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'reflex'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Zap className="w-4 h-4 fill-current text-amber-500" />
            <span>Reflex Prompts</span>
          </button>

          <button
            onClick={() => setActiveTab('rescue')}
            className={`flex shrink-0 items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'rescue'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-amber-500" />
            <span>Centro de Rescate & Clarificación</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex shrink-0 items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'profile'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <UserCircle className="w-4 h-4" />
            <span>Mi Perfil</span>
          </button>

          {currentUser?.role === 'admin' && (
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex shrink-0 items-center gap-2 px-4 py-2 rounded-2xl text-xs font-black transition whitespace-nowrap ${
                activeTab === 'admin'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-amber-700 hover:bg-amber-50'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Panel Admin</span>
            </button>
          )}
        </div>
      </nav>

      {/* Main Dynamic Viewport */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto px-2 sm:px-6 py-6">
        <Suspense
          fallback={
            <div className="flex min-h-[40vh] items-center justify-center px-4">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-600 shadow-sm">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-indigo-600" />
                Cargando contenido...
              </div>
            </div>
          }
        >
          {activeTab === 'curriculum' && (
            <CurriculumHub
              completedLessons={completedLessons}
              savedAnswers={savedAnswers}
              lastActiveLessonId={lastPosition.lessonId}
              lastActiveStep={lastPosition.step}
              onSavePosition={handleSavePosition}
              onSaveWorkbookAnswer={handleSaveWorkbookAnswer}
              onMarkLessonCompleted={handleMarkLessonCompleted}
            />
          )}

          {activeTab === 'listening' && (
            <MicroListeningModule onCompleteDrill={(chunk, err) => handleCompleteDrill(chunk, err)} />
          )}

          {activeTab === 'reflex' && (
            <ReflexTrainingModule onCompleteDrill={(chunk, err) => handleCompleteDrill(chunk, err)} />
          )}

          {activeTab === 'rescue' && <RescueCenterHub />}

          {activeTab === 'profile' && (
            <StudentProfileModal
              profile={profile}
              onUpdateProfile={updateProfileFields}
              isAuthenticated={Boolean(authToken)}
              userEmail={currentUser?.email}
              onRequestAuth={() => setAuthModalOpen(true)}
              onLogout={handleLogout}
            />
          )}

          {activeTab === 'admin' && currentUser?.role === 'admin' && (
            <AdminDashboard token={authToken || ''} />
          )}
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 px-4 text-center text-xs text-slate-500">
        <p className="break-words">EN-Class • Plataforma de Fluidez Acelerada A1-B2 • Estilo Test-English • Base de Datos Neon PostgreSQL</p>
      </footer>
    </div>
  );
};

export default App;
