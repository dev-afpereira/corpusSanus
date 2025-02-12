import React, { useState } from 'react';
import { storage } from '../services/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const BeforeAfterGallery = () => {
  const [images, setImages] = useState<{ before: string; after: string }[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (file: File, type: 'before' | 'after') => {
    setIsUploading(true);
    const storageRef = ref(storage, `progress-photos/${Date.now()}_${type}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    setImages(prev => [...prev, type === 'before' ? { before: url, after: '' } : { ...prev.pop(), after: url }]);
    setIsUploading(false);
  };

  return (
    <div className="gallery-container">
      <h3>Minha Evolução</h3>
      <div className="photo-grid">
        {images.map((img, index) => (
          <div key={index} className="comparison-item">
            <div className="photo before">
              {img.before && <img src={img.before} alt="Antes" />}
              <input
                type="file"
                onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], 'before')}
              />
            </div>
            <div className="photo after">
              {img.after && <img src={img.after} alt="Depois" />}
              <input
                type="file"
                onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], 'after')}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 