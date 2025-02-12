import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "../../styles/WeightChart.css";
import { WeightEntry } from '../../types';

interface WeightChartProps {
  data: WeightEntry[];
}

const WeightChart: React.FC<WeightChartProps> = ({ data }) => (
  <div className="chart-container">
    <h3>Evolução de Peso</h3>
    <LineChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line 
        type="monotone" 
        dataKey="weight" 
        stroke="#3498db" 
        strokeWidth={2}
      />
    </LineChart>
  </div>
);

export default WeightChart;