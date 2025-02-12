import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState<number | null>(null);

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100;
    if (weightNum && heightNum) {
      setBMI(Math.round(weightNum / (heightNum * heightNum)));
    }
  };

  return (
    <div className="bmi-calculator">
      <h3>Calculadora de IMC</h3>
      <div className="input-group">
        <label>Peso (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Altura (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calcular</button>
      {bmi && (
        <div className="result">
          <h4>Seu IMC: {bmi}</h4>
          <p className="interpretation">
            {bmi < 18.5 ? 'Abaixo do peso' :
             bmi < 25 ? 'Peso normal' :
             bmi < 30 ? 'Sobrepeso' : 'Obesidade'}
          </p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator; 