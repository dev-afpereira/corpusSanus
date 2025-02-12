import React, { useState } from 'react';
import { storage } from '../../services/firebase';
import { ref, uploadBytes } from 'firebase/storage';

export default function DoctorVerification() {
  const [documents, setDocuments] = useState<File[]>([]);

  const handleUpload = async (file: File, type: string) => {
    const storageRef = ref(storage, `doctor-docs/${Date.now()}_${type}`);
    await uploadBytes(storageRef, file);
  };

  return (
    <div className="verification-system">
      <h3>Verificação de Documentos</h3>
      <div className="documents-grid">
        <div className="doc-item">
          <label>CRM (PDF ou imagem)</label>
          <input
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], 'crm')}
          />
        </div>
        <div className="doc-item">
          <label>Certificado de Especialidade</label>
          <input
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], 'certificado')}
          />
        </div>
      </div>
    </div>
  );
} 