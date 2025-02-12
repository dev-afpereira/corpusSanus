import React, { useState } from "react";
import { db } from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";
import  useAuth from "../../hooks/useAuth";
import "../../styles/MeasurementsForm.css";

const MeasurementsForm = () => {
  const { user } = useAuth();
  const [measurements, setMeasurements] = useState({
    neck: "",
    shoulder: "",
    bust: "",
    waist: "",
    hip: "",
    thigh: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      await addDoc(collection(db, "measurements"), {
        ...measurements,
        date: new Date(),
        userId: user.uid,
      });
      alert("Medidas registradas com sucesso!");
      setMeasurements({
        neck: "",
        shoulder: "",
        bust: "",
        waist: "",
        hip: "",
        thigh: "",
      });
    } catch (error) {
      alert("Erro ao registrar medidas: " + (error as Error).message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="measurements-form" onSubmit={handleSubmit}>
      <h3>Registrar Medidas Corporais</h3>
      <div className="input-group">
        <label>Pescoço (cm)</label>
        <input
          type="number"
          name="neck"
          value={measurements.neck}
          onChange={handleChange}
          step="0.1"
          min="0"
          required
        />
      </div>
      <div className="input-group">
        <label>Ombro (cm)</label>
        <input
          type="number"
          name="shoulder"
          value={measurements.shoulder}
          onChange={handleChange}
          step="0.1"
          min="0"
          required
        />
      </div>
      <div className="input-group">
        <label>Busto (cm)</label>
        <input
          type="number"
          name="bust"
          value={measurements.bust}
          onChange={handleChange}
          step="0.1"
          min="0"
          required
        />
      </div>
      <div className="input-group">
        <label>Cintura (cm)</label>
        <input
          type="number"
          name="waist"
          value={measurements.waist}
          onChange={handleChange}
          step="0.1"
          min="0"
          required
        />
      </div>
      <div className="input-group">
        <label>Quadril (cm)</label>
        <input
          type="number"
          name="hip"
          value={measurements.hip}
          onChange={handleChange}
          step="0.1"
          min="0"
          required
        />
      </div>
      <div className="input-group">
        <label>Coxa (cm)</label>
        <input
          type="number"
          name="thigh"
          value={measurements.thigh}
          onChange={handleChange}
          step="0.1"
          min="0"
          required
        />
      </div>
      <button type="submit">Salvar Medidas</button>
    </form>
  );
};

export default MeasurementsForm;