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

  // Sync profile from backend if logged in
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

  const handleCompleteDrill = (chunk: string, errorFeedback?: { error: string; correction: string }, lessonId?: string) => {
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

      const updated = {
        ...prev,
        mastered_chunks: newMastered,
        error_bank: newErrorBank,
        drills_completed: prev.drills_completed + 1
      };

      // Persist to Neon DB backend if authenticated
      if (authToken) {
        let updatedCompleted = completedLessons;
        if (lessonId && !completedLessons.includes(lessonId)) {
          updatedCompleted = [...completedLessons, lessonId];
          setCompletedLessons(updatedCompleted);
        }

        fetch('http://127.0.0.1:3001/api/student/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          },
          body: JSON.stringify({
            mastered_chunks: updated.mastered_chunks,
            error_bank: updated.error_bank,
            session_summary: `Práctica completada con chunk: ${chunk}`,
            completed_lessons: updatedCompleted
          })
        }).catch(console.error);
      }

      return updated;
    });
  };

  const updateProfileFields = (updates: Partial<StudentProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* If not logged in, show AuthModal */}
      {!authToken && <AuthModal onLoginSuccess={handleLoginSuccess} />}

      {/* Top Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-amber-500 flex items-center justify-center font-black text-slate-950 text-lg shadow-lg shadow-indigo-500/20">
              EN
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-white text-base tracking-tight">EN-Class Fluency</h1>
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                  A1 ➔ B2
                </span>
                {currentUser?.role === 'admin' && (
                  <span className="text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full">
                    Admin
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">Zero Translation • Neon PostgreSQL Cloud</p>
            </div>
          </div>

          {/* Student Status Quick Widget */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 rounded-xl px-3 py-1.5 text-xs">
              <Flame className="w-4 h-4 text-amber-400 fill-current" />
              <span className="font-semibold text-slate-200">{profile.streak_days}d Racha</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 rounded-xl px-3 py-1.5 text-xs">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-slate-200">{profile.drills_completed} Prácticas</span>
            </div>

            <button
              onClick={() => setActiveTab('profile')}
              className="flex items-center gap-2 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 rounded-xl px-3 py-1.5 text-xs font-semibold text-indigo-300 transition"
            >
              <UserCircle className="w-4 h-4 text-indigo-400" />
              <span>{currentUser?.name || profile.student_name}</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-2 rounded-xl bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 transition border border-slate-700"
              title="Cerrar Sesión"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Sub-bar */}
      <nav className="bg-slate-900 border-b border-slate-800 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-around sm:justify-center gap-1 sm:gap-3 py-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'curriculum'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Clases A1-B2</span>
          </button>

          <button
            onClick={() => setActiveTab('listening')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'listening'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>Micro-Listening</span>
          </button>

          <button
            onClick={() => setActiveTab('reflex')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'reflex'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>3s Reflex Drills</span>
          </button>

          <button
            onClick={() => setActiveTab('safety')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'safety'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Salvavidas (Safety Belts)</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'profile'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <UserCircle className="w-4 h-4" />
            <span>Mi Perfil & DB</span>
          </button>

          {currentUser?.role === 'admin' && (
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black transition whitespace-nowrap ${
                activeTab === 'admin'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-rose-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Panel Admin</span>
            </button>
          )}
        </div>
      </nav>

      {/* Main Dynamic Viewport */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        {activeTab === 'curriculum' && (
          <CurriculumHub
            lessons={COMPREHENSIVE_CURRICULUM}
            completedLessons={completedLessons}
            onCompleteExercise={(lessonId, chunk, err) => handleCompleteDrill(chunk, err, lessonId)}
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
      <footer className="border-t border-slate-900 bg-slate-950 py-4 text-center text-xs text-slate-500">
        <p>EN-Class • Full-Stack English Fluency Platform • Neon PostgreSQL Database • Conectado a Git</p>
      </footer>
    </div>
  );
};

export default App;
