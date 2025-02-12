import React, { useState } from "react";
import { db, storage } from "../../services/firebase"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import useAuth from "../../hooks/useAuth";
import "../../styles/ProgressPhotos.css";

const ProgressPhotos = () => {
  const { user } = useAuth();
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!photo || !user) return;

    try {
      const storageRef = ref(storage, `progress-photos/${user.uid}/${photo.name}`);
      await uploadBytes(storageRef, photo);
      const url = await getDownloadURL(storageRef);

      await addDoc(collection(db, "progressPhotos"), {
        url,
        date: new Date(),
        userId: user.uid,
      });

      setPhotoUrl(url);
      alert("Foto enviada com sucesso!");
    } catch (error) {
      alert("Erro ao enviar foto: " + (error as Error).message);
    }
  };

  return (
    <div className="progress-photos">
      <h3>Fotos de Progresso</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} required />
        <button type="submit">Enviar Foto</button>
      </form>
      {photoUrl && (
        <div className="photo-preview">
          <img src={photoUrl} alt="Progresso" />
        </div>
      )}
    </div>
  );
};

export default ProgressPhotos;