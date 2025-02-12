import React from 'react';

interface PatientChartProps {
  weightHistory: number[];
  measurements: Patient['measurements'];
}

export const PatientChart: React.FC<PatientChartProps> = ({ weightHistory, measurements }) => {
  return (
    <div className="chart-container">
      <h3>Progresso do Paciente</h3>
      {/* Implemente a lógica do gráfico aqui */}
    </div>
  );
}; 