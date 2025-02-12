import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import "../../styles/WeightForm.css";

interface WeightFormProps {
  onSubmit: (weight: number) => Promise<void>;
}

const WeightForm: React.FC<WeightFormProps> = ({ onSubmit }) => {
  const { user } = useAuth();
  const [weight, setWeight] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight || !user) return;

    try {
      await onSubmit(parseFloat(weight));
      setWeight("");
    } catch (error) {
      alert("Erro ao registrar peso: " + (error as Error).message);
    }
  };

  return (
    <form className="weight-form" onSubmit={handleSubmit}>
      <h3>Registrar Peso Diário</h3>
      <input
        type="number"
        placeholder="Peso (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        step="0.1"
        min="0"
        required
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default WeightForm;