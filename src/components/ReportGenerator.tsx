import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { Patient } from '../../types/Patient';
import { exportToExcel } from '../../utils/exporter';

interface ReportGeneratorProps {
  patient: Patient;
}

const ReportGenerator = ({ patient }: ReportGeneratorProps) => {
  const componentRef = React.useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const exportExcel = () => {
    exportToExcel([patient], `${patient.displayName}_relatorio`);
  };

  return (
    <div className="report-generator">
      <div className="report-actions">
        <button onClick={handlePrint}>Exportar PDF</button>
        <button onClick={exportExcel}>Exportar Excel</button>
      </div>
      
      <div className="report-content" ref={componentRef}>
        <h2>Relatório do Paciente: {patient.displayName}</h2>
        <div className="patient-info">
          <p>Progresso Atual: {patient.progress}%</p>
          <p>Última Atualização: {new Date(patient.lastActivity).toLocaleDateString()}</p>
        </div>
        <div className="measurements-section">
          <h3>Histórico de Medições</h3>
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Peso (kg)</th>
                <th>% Gordura</th>
                <th>Massa Muscular</th>
              </tr>
            </thead>
            <tbody>
              {patient.measurements.map((m, i) => (
                <tr key={i}>
                  <td>{new Date(m.date).toLocaleDateString()}</td>
                  <td>{m.weight}</td>
                  <td>{m.bodyFat || '-'}</td>
                  <td>{m.muscleMass || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}; 