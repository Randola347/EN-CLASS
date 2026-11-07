import React, { useState, useEffect } from 'react';
import { 
  Headphones, 
  Zap, 
  Shield, 
  UserCircle, 
  Flame,
  Award,
  BookOpen,
  LogOut,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { StudentProfile } from './types';
import { COMPREHENSIVE_CURRICULUM } from './data/curriculumData';
import { 
  MICRO_LISTENING_DRILLS, 
  REFLEX_DRILLS, 
  SAFETY_BELTS 
} from './data/drillsData';
import { CurriculumHub } from './components/CurriculumHub';
import { MicroListeningModule } from './components/MicroListeningModule';
import { ReflexTrainingModule } from './components/ReflexTrainingModule';
import { SafetyBeltHub } from './components/SafetyBeltHub';
import { StudentProfileModal } from './components/StudentProfileModal';
import { AuthModal } from './components/AuthModal';
import { AdminDashboard } from './components/AdminDashboard';

export const App: React.FC = () => {
  const [authToken, setAuthToken] = useState<string | null>(() => localStorage.getItem('en_class_token'));
  const [currentUser, setCurrentUser] = useState<any>(() => {
    const saved = localStorage.getItem('en_class_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [activeTab, setActiveTab] = useState<'curriculum' | 'listening' | 'reflex' | 'safety' | 'profile' | 'admin'>('curriculum');
  
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

    fetch('http://127.0.0.1:3001/api/student/profile', {
      headers: { 'Authorization': `Bearer ${authToken}` }
    })
      .then(res => res.json())
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
  };

  const handleLogout = () => {
    setAuthToken(null);
    setCurrentUser(null);
    localStorage.removeItem('en_class_token');
    localStorage.removeItem('en_class_user');
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

    fetch('http://127.0.0.1:3001/api/student/position', {
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

    fetch('http://127.0.0.1:3001/api/student/workbook', {
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
      .then(res => res.json())
      .then(() => {
        setProfile(prev => ({ ...prev, drills_completed: prev.drills_completed + 1 }));
      })
      .catch(console.error);
  };

  const handleMarkLessonCompleted = (lessonId: string) => {
    if (completedLessons.includes(lessonId)) return;
    const updated = [...completedLessons, lessonId];
    setCompletedLessons(updated);
    triggerCelebration();

    if (authToken) {
      fetch('http://127.0.0.1:3001/api/student/profile', {
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
    setProfile(prev => {
      const alreadyMastered = prev.mastered_chunks.includes(chunk);
      const newMastered = alreadyMastered ? prev.mastered_chunks : [...prev.mastered_chunks, chunk];

      let newErrorBank = prev.error_bank;
      if (errorFeedback) {
        newErrorBank = [
          {
            error: errorFeedback.error,
            correction: errorFeedback.correction,
            timestamp: new Date().toLocaleTimeString()
          },
          ...prev.error_bank.slice(0, 19)
        ];
      } else {
        triggerCelebration();
      }

      return {
        ...prev,
        mastered_chunks: newMastered,
        error_bank: newErrorBank,
        drills_completed: prev.drills_completed + 1
      };
    });
  };

  const updateProfileFields = (updates: Partial<StudentProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* If not logged in, show AuthModal */}
      {!authToken && <AuthModal onLoginSuccess={handleLoginSuccess} />}

      {/* Top Navbar (Clean White & Blue Style) */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-40 shadow-xs">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center font-black text-white text-lg shadow-sm shadow-blue-600/30">
              EN
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-slate-900 text-base tracking-tight">EN-Class Fluency</h1>
                <span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200 px-2 py-0.5 rounded-full">
                  A1 ➔ B2
                </span>
                {currentUser?.role === 'admin' && (
                  <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full">
                    Admin
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500">Test-English Method • Neon PostgreSQL</p>
            </div>
          </div>

          {/* Student Status Quick Widget */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs">
              <Flame className="w-4 h-4 text-amber-500 fill-current" />
              <span className="font-semibold text-slate-700">{profile.streak_days}d Racha</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs">
              <Award className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-slate-700">{profile.drills_completed} Respuestas</span>
            </div>

            <button
              onClick={() => setActiveTab('profile')}
              className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-blue-700 transition"
            >
              <UserCircle className="w-4 h-4 text-blue-600" />
              <span>{currentUser?.name || profile.student_name}</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-2 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 transition border border-slate-200"
              title="Cerrar Sesión"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Sub-bar */}
      <nav className="bg-white border-b border-slate-200 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-around sm:justify-center gap-1 sm:gap-3 py-2.5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'curriculum'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Clases A1-B2 (20 Clases)</span>
          </button>

          <button
            onClick={() => setActiveTab('listening')}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition whitespace-nowrap ${
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
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'reflex'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Zap className="w-4 h-4 fill-current text-amber-500" />
            <span>Reflex Prompts</span>
          </button>

          <button
            onClick={() => setActiveTab('safety')}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'safety'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Salvavidas (Safety Belts)</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'profile'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <UserCircle className="w-4 h-4" />
            <span>Mi Perfil & DB</span>
          </button>

          {currentUser?.role === 'admin' && (
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-black transition whitespace-nowrap ${
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
        {activeTab === 'curriculum' && (
          <CurriculumHub
            lessons={COMPREHENSIVE_CURRICULUM}
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
          <MicroListeningModule
            drills={MICRO_LISTENING_DRILLS}
            onCompleteDrill={(chunk, err) => handleCompleteDrill(chunk, err)}
          />
        )}

        {activeTab === 'reflex' && (
          <ReflexTrainingModule
            drills={REFLEX_DRILLS}
            onCompleteDrill={(chunk, err) => handleCompleteDrill(chunk, err)}
          />
        )}

        {activeTab === 'safety' && (
          <SafetyBeltHub
            items={SAFETY_BELTS}
            onAddChunk={(chk) => handleCompleteDrill(chk)}
          />
        )}

        {activeTab === 'profile' && (
          <StudentProfileModal
            profile={profile}
            onUpdateProfile={updateProfileFields}
          />
        )}

        {activeTab === 'admin' && currentUser?.role === 'admin' && (
          <AdminDashboard token={authToken || ''} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <p>EN-Class • Plataforma de Fluidez Acelerada A1-B2 • Estilo Test-English • Base de Datos Neon PostgreSQL</p>
      </footer>
    </div>
  );
};

export default App;
