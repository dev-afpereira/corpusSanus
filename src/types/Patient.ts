// Crie este arquivo para o tipo Patient
export interface Patient {
  uid: string;
  displayName: string;
  progress: number;
  weightHistory: number[];
  measurements: {
    date: string;
    weight: number;
    bodyFat?: number;
    muscleMass?: number;
  }[];
  // Adicione mais propriedades conforme necessário
} 