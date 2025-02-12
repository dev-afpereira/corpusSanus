import { useState, useCallback, useEffect } from 'react';
import useAuth  from '../../hooks/useAuth';
import { db } from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface NutritionData {
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const NutritionStats = () => {
  const [weeklyData, setWeeklyData] = useState<NutritionData[]>([]);
  const [macroTotals, setMacroTotals] = useState({
    protein: 0,
    carbs: 0,
    fats: 0
  });
  const { user } = useAuth();

  const loadNutritionData = useCallback(async () => {
    if (!user) return;

    try {
      const docRef = doc(db, 'users', user.uid, 'nutrition', 'weeklyStats');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data().stats;
        setWeeklyData(data);

        // Calcular totais
        const totals = data.reduce((acc: NutritionData, day: NutritionData) => ({
          protein: acc.protein + day.protein,
          carbs: acc.carbs + day.carbs,
          fats: acc.fats + day.fats
        }), { protein: 0, carbs: 0, fats: 0 });

        setMacroTotals(totals);
      }
    } catch (error) {
      console.error('Erro ao carregar dados nutricionais:', error);
    }
  }, [user]);

  useEffect(() => {
    loadNutritionData();
  }, [loadNutritionData]);

  const pieData = [
    { name: 'Proteínas', value: macroTotals.protein },
    { name: 'Carboidratos', value: macroTotals.carbs },
    { name: 'Gorduras', value: macroTotals.fats }
  ];

  return (
    <div className="nutrition-stats">
      <h2>Estatísticas Nutricionais</h2>

      <div className="stats-grid">
        <div className="stats-card">
          <h3>Calorias Diárias</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(date) => new Date(date).toLocaleDateString('pt-PT', { weekday: 'short' })}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="calories" fill="#8884d8" name="Calorias" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="stats-card">
          <h3>Distribuição de Macronutrientes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="stats-card">
          <h3>Macronutrientes Diários</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(date) => new Date(date).toLocaleDateString('pt-PT', { weekday: 'short' })}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="protein" fill="#0088FE" name="Proteínas" />
              <Bar dataKey="carbs" fill="#00C49F" name="Carboidratos" />
              <Bar dataKey="fats" fill="#FFBB28" name="Gorduras" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default NutritionStats; 