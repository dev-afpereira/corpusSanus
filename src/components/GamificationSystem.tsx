import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  achieved: boolean;
}

const GamificationSystem = ({ userId }: { userId: string }) => {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const userRef = doc(db, 'users', userId);
    const unsubscribe = onSnapshot(userRef, (doc) => {
      setBadges(doc.data()?.badges || []);
      setPoints(doc.data()?.gamificationPoints || 0);
    });
    return () => unsubscribe();
  }, [userId]);

  const unlockBadge = async (badgeId: string) => {
    const updatedBadges = badges.map(badge => 
      badge.id === badgeId ? { ...badge, achieved: true } : badge
    );
    await updateDoc(doc(db, 'users', userId), { badges: updatedBadges });
  };

  return (
    <div className="gamification-panel">
      <div className="points-counter">
        <h3>Pontuação: {points} pts</h3>
        <div className="progress-bar">
          <div style={{ width: `${(points % 1000)/10}%` }}></div>
        </div>
      </div>
      <div className="badges-grid">
        {badges.map((badge) => (
          <div key={badge.id} className={`badge ${badge.achieved ? 'unlocked' : ''}`}>
            <img src={badge.icon} alt={badge.name} />
            <h4>{badge.name}</h4>
            <p>{badge.description}</p>
            {!badge.achieved && (
              <button onClick={() => unlockBadge(badge.id)}>
                Desbloquear
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamificationSystem; 