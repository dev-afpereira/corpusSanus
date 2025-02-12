import { useState, useEffect, useCallback } from "react";
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from "../../services/firebase";
import useAuth from "../../hooks/useAuth";   
import WeightChart from "../../components/WeightChart/WeightChart";
import WeightForm from "../../components/WeightForm/WeightForm";
import MeasurementsForm from "../../components/MeasurementsForm/MeasurementsForm";
import ProgressPhotos from "../../components/ProgressPhotos/ProgressPhotos";
import "../../styles/Dashboard.css";
import { WeightEntry } from '../../types';

interface UserData {
  weightHistory: WeightEntry[];
  currentWeight: number | null;
  startDate: Date | null;
  daysCompleted: {
    phase1: number;
    phase2: number;
    phase3: number;
    phase4: number;
  };
}

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("peso");
  const [weightHistory, setWeightHistory] = useState<WeightEntry[]>([]);
  const [currentWeight, setCurrentWeight] = useState<number | null>(null);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [daysCompleted, setDaysCompleted] = useState({
    phase1: 0,
    phase2: 0,
    phase3: 0,
    phase4: 0
  });
  const [loading, setLoading] = useState(true);
  const [showResetModal, setShowResetModal] = useState(false);

  const PHASE_DAYS = {
    phase1: 5,  // Fase 1: 5 dias
    phase2: 32, // Fase 2: 32 dias
    phase3: 3,  // Fase 3: 3 dias
    phase4: 18  // Fase 4: 18 dias
  };

  const totalDays = Object.values(PHASE_DAYS).reduce((a, b) => a + b, 0);
  const totalCompleted = Object.values(daysCompleted).reduce((a, b) => a + b, 0);

  const loadUserData = useCallback(async () => {
    const resetUserProgress = async () => {
      if (!user?.uid) return;
      
      try {
        const userDocRef = doc(db, 'users', user.uid);
        const initialData = {
          weightHistory: [],
          currentWeight: null,
          startDate: null,
          daysCompleted: {
            phase1: 0,
            phase2: 0,
            phase3: 0,
            phase4: 0
          }
        };

        await setDoc(userDocRef, initialData, { merge: false });
        window.location.reload();
      } catch (error) {
        console.error("Erro ao resetar dados:", error);
      }
    };

    try {
      const userDocRef = doc(db, 'users', user!.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const data = userDoc.data() as UserData;
        // Verifica se os dados estão corretos, caso contrário reseta
        if (!data.daysCompleted || 
            typeof data.daysCompleted.phase1 !== 'number' ||
            typeof data.daysCompleted.phase2 !== 'number' ||
            typeof data.daysCompleted.phase3 !== 'number' ||
            typeof data.daysCompleted.phase4 !== 'number') {
          await resetUserProgress();
          return;
        }
        
        setWeightHistory(data.weightHistory?.map(entry => ({
          ...entry,
          date: new Date(entry.date).toISOString()
        })) || []);
        setCurrentWeight(data.currentWeight || null);
        setStartDate(data.startDate ? new Date(data.startDate).toISOString() : null);
        setDaysCompleted(data.daysCompleted);
      } else {
        await resetUserProgress();
      }
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      await resetUserProgress();
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user?.uid) {
      loadUserData();
    }
  }, [user, loadUserData]);

  const handleWeightSubmit = async (weight: number) => {
    try {
      // Ajustar para o fuso horário de Portugal
      const now = new Date();
      const portugalTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Lisbon' }));
      
      const newEntry: WeightEntry = {
        date: portugalTime.toISOString(),
        weight
      };
      const updatedHistory = [...weightHistory, newEntry];

      setCurrentWeight(weight);
      setWeightHistory(updatedHistory);

      if (!startDate) {
        setStartDate(portugalTime.toISOString());
      }

      const userDocRef = doc(db, 'users', user!.uid);
      await updateDoc(userDocRef, {
        weightHistory: updatedHistory,
        currentWeight: weight,
        startDate: startDate || portugalTime.toISOString(),
      });
    } catch (error) {
      console.error("Erro ao salvar peso:", error);
    }
  };

  const updateDaysCompleted = async (phase: 'phase1' | 'phase2' | 'phase3' | 'phase4') => {
    try {
      if (daysCompleted[phase] < PHASE_DAYS[phase]) {
        const newDaysCompleted = {
          ...daysCompleted,
          [phase]: daysCompleted[phase] + 1
        };
        setDaysCompleted(newDaysCompleted);
        
        const userDocRef = doc(db, 'users', user!.uid);
        await updateDoc(userDocRef, {
          daysCompleted: newDaysCompleted
        });
      }
    } catch (error) {
      console.error("Erro ao atualizar dias completados:", error);
    }
  };

  const resetUserProgress = async () => {
    if (!user?.uid) return;
    
    try {
      const userDocRef = doc(db, 'users', user.uid);
      const initialData = {
        weightHistory: [],
        currentWeight: null,
        startDate: null,
        daysCompleted: {
          phase1: 0,
          phase2: 0,
          phase3: 0,
          phase4: 0
        }
      };

      await setDoc(userDocRef, initialData, { merge: false });
      window.location.reload();
    } catch (error) {
      console.error("Erro ao resetar dados:", error);
    }
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Bem-vindo(a), {user?.displayName || 'Usuário'}</h2>
        <p>Seu progresso em tempo real</p>
      </header>

      <div className="current-stats">
        <div className="stat-card">
          <h3>Peso Atual</h3>
          <p>{currentWeight ? `${currentWeight} kg` : 'Não registrado'}</p>
          {weightHistory.length > 0 && (
            <small>Início: {(() => {
              const lastEntry = weightHistory[weightHistory.length - 1];
              const date = new Date(lastEntry.date);
              const portugalDate = new Date(date.toLocaleString('pt-PT', { timeZone: 'Europe/Lisbon' }));
              const day = portugalDate.getDate().toString().padStart(2, '0');
              const month = (portugalDate.getMonth() + 1).toString().padStart(2, '0');
              const year = portugalDate.getFullYear();
              return `${day}/${month}/${year}`;
            })()}</small>
          )}
        </div>
        <div className="stat-card">
          <h3>Progresso Total</h3>
          <p>{totalCompleted} de {totalDays} dias</p>
        </div>
      </div>

      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'peso' ? 'active' : ''}
          onClick={() => setActiveTab('peso')}
        >
          Evolução de Peso
        </button>
        <button 
          className={activeTab === 'medidas' ? 'active' : ''}
          onClick={() => setActiveTab('medidas')}
        >
          Medidas Corporais
        </button>
        <button 
          className={activeTab === 'fotos' ? 'active' : ''}
          onClick={() => setActiveTab('fotos')}
        >
          Fotos de Progresso
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'peso' && (
          <>
            <WeightChart data={weightHistory} />
            <WeightForm onSubmit={handleWeightSubmit} />
            <div className="weight-history">
              <h3>Histórico de Pesagens</h3>
              <div className="history-list">
                {weightHistory.map((entry, index) => (
                  <div key={index} className="history-item">
                    <span>{new Date(entry.date).toLocaleDateString('pt-PT')}</span>
                    <span>{entry.weight} kg</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'medidas' && <MeasurementsForm />}
        {activeTab === 'fotos' && <ProgressPhotos />}
      </div>

      <div className="phase-progress">
        <h3>Progresso nas Fases</h3>
        <div className="progress-container">
          <div className="progress-phase">
            <h4>Fase 1 - Desintoxicação (5 dias)</h4>
            <div className="progress-bars">
              <div 
                className="phase-bar"
                style={{
                  width: `${Math.max((daysCompleted.phase1 / PHASE_DAYS.phase1) * 100, 0)}%`
                }}
              >
                {`${daysCompleted.phase1}/${PHASE_DAYS.phase1}`}
              </div>
            </div>
            <button 
              onClick={() => updateDaysCompleted('phase1')}
              disabled={daysCompleted.phase1 >= PHASE_DAYS.phase1}
              className="increment-day-btn"
            >
              Completar Dia
            </button>
          </div>

          <div className="progress-phase">
            <h4>Fase 2 - Emagrecimento (32 dias)</h4>
            <div className="progress-bars">
              <div 
                className="phase-bar phase-bar-2"
                style={{
                  width: `${Math.max((daysCompleted.phase2 / PHASE_DAYS.phase2) * 100, 0)}%`
                }}
              >
                <span>{daysCompleted.phase2}/{PHASE_DAYS.phase2}</span>
              </div>
            </div>
            <button 
              onClick={() => updateDaysCompleted('phase2')}
              disabled={daysCompleted.phase2 >= PHASE_DAYS.phase2}
              className="increment-day-btn"
            >
              Completar Dia
            </button>
          </div>

          <div className="progress-phase">
            <h4>Fase 3 - Transição (3 dias)</h4>
            <div className="progress-bars">
              <div 
                className="phase-bar phase-bar-3"
                style={{
                  width: `${Math.max((daysCompleted.phase3 / PHASE_DAYS.phase3) * 100, 0)}%`
                }}
              >
                <span>{daysCompleted.phase3}/{PHASE_DAYS.phase3}</span>
              </div>
            </div>
            <button 
              onClick={() => updateDaysCompleted('phase3')}
              disabled={daysCompleted.phase3 >= PHASE_DAYS.phase3}
              className="increment-day-btn"
            >
              Completar Dia
            </button>
          </div>

          <div className="progress-phase">
            <h4>Fase 4 - Manutenção (18 dias)</h4>
            <div className="progress-bars">
              <div 
                className="phase-bar phase-bar-4"
                style={{
                  width: `${Math.max((daysCompleted.phase4 / PHASE_DAYS.phase4) * 100, 0)}%`
                }}
              >
                <span>{daysCompleted.phase4}/{PHASE_DAYS.phase4}</span>
              </div>
            </div>
            <button 
              onClick={() => updateDaysCompleted('phase4')}
              disabled={daysCompleted.phase4 >= PHASE_DAYS.phase4}
              className="increment-day-btn"
            >
              Completar Dia
            </button>
          </div>
        </div>
      </div>

      <div className="reset-container">
        <button 
          onClick={() => setShowResetModal(true)}
          className="reset-btn"
        >
          Resetar Todo o Progresso
        </button>
      </div>

      {showResetModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirmar Reset</h3>
            <p>Tem certeza que deseja resetar todo o progresso?</p>
            <p>Esta ação não poderá ser desfeita.</p>
            <div className="modal-buttons">
              <button 
                onClick={() => {
                  resetUserProgress();
                  setShowResetModal(false);
                }}
                className="confirm-btn"
              >
                Sim, Resetar
              </button>
              <button 
                onClick={() => setShowResetModal(false)}
                className="cancel-btn"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;