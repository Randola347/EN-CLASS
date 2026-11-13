import React, { useEffect, useState } from 'react';
import { Shield, AlertCircle, RefreshCw } from 'lucide-react';
import { apiJson } from '../config/api';

interface Props {
  token: string;
}

export const AdminDashboard: React.FC<Props> = ({ token }) => {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOverview = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiJson<{ students?: any[] }>('/api/admin/overview', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setStudents(data.students || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error cargando dashboard de administración');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOverview();
  }, [token]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="bg-gradient-to-r from-amber-950/60 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-2 max-w-full">
            <Shield className="w-3.5 h-3.5 shrink-0" />
            <span className="break-words">Panel de Administración • Neon PostgreSQL</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white break-words">Monitoreo de Estudiantes</h2>
          <p className="text-xs text-slate-300 mt-1 break-words">
            Visualiza en tiempo real el progreso de cada usuario, sus obstáculos detectados y chunks dominados.
          </p>
        </div>

        <button
          onClick={fetchOverview}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-2 transition border border-slate-700"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Actualizar Lista</span>
        </button>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Students Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-400">
          <span>Total de Usuarios Registrados: {students.length}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
              <tr>
                <th className="p-4">Estudiante</th>
                <th className="p-4">Nivel Actual</th>
                <th className="p-4">Rol</th>
                <th className="p-4">Racha / Drills</th>
                <th className="p-4">Chunks Dominados</th>
                <th className="p-4">Banco de Errores</th>
                <th className="p-4">Fecha Registro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {students.map((st) => {
                const masteredCount = Array.isArray(st.mastered_chunks) ? st.mastered_chunks.length : 0;
                const errorCount = Array.isArray(st.error_bank) ? st.error_bank.length : 0;

                return (
                  <tr key={st.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4">
                      <div className="font-bold text-white text-sm">{st.name}</div>
                      <div className="text-slate-400 text-[11px]">{st.email}</div>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {st.current_level}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        st.role === 'admin' 
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                          : 'bg-slate-800 text-slate-300'
                      }`}>
                        {st.role}
                      </span>
                    </td>
                    <td className="p-4 font-medium text-slate-200">
                      <div>🔥 {st.streak_days || 1} días</div>
                      <div className="text-slate-400 text-[11px]">⚡ {st.drills_completed || 0} completados</div>
                    </td>
                    <td className="p-4">
                      <span className="text-emerald-400 font-semibold">{masteredCount} chunks</span>
                    </td>
                    <td className="p-4">
                      <span className="text-rose-400 font-semibold">{errorCount} registros</span>
                    </td>
                    <td className="p-4 text-slate-400">
                      {new Date(st.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
