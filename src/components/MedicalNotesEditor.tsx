import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';
import { format } from 'date-fns';

interface MedicalNote {
  id?: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface MedicalNotesEditorProps {
  patientId?: string;
}

export const MedicalNotesEditor: React.FC<MedicalNotesEditorProps> = ({ patientId }) => {
  const [notes, setNotes] = useState<MedicalNote[]>([]);
  const [currentNote, setCurrentNote] = useState('');
  const [selectedNote, setSelectedNote] = useState<MedicalNote | null>(null);

  useEffect(() => {
    if (patientId) {
      const q = query(
        collection(db, 'patients', patientId, 'medicalNotes'),
        orderBy('createdAt', 'desc')
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const notesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt.toDate(),
          updatedAt: doc.data().updatedAt.toDate()
        })) as MedicalNote[];
        setNotes(notesData);
      });
      return () => unsubscribe();
    }
  }, [patientId]);

  const saveNote = async () => {
    if (patientId && currentNote.trim()) {
      const noteData = {
        content: currentNote,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      await setDoc(doc(db, 'patients', patientId, 'medicalNotes', noteData.createdAt.toISOString()), noteData);
      setCurrentNote('');
    }
  };

  const updateNote = async () => {
    if (patientId && selectedNote?.id) {
      await setDoc(doc(db, 'patients', patientId, 'medicalNotes', selectedNote.id), {
        ...selectedNote,
        content: currentNote,
        updatedAt: new Date()
      });
      setSelectedNote(null);
      setCurrentNote('');
    }
  };

  return (
    <div className="notes-editor">
      <div className="notes-history">
        <h4>Histórico de Notas</h4>
        {notes.map(note => (
          <div 
            key={note.id} 
            className="note-item"
            onClick={() => {
              setSelectedNote(note);
              setCurrentNote(note.content);
            }}
          >
            <div className="note-date">
              {format(note.updatedAt, 'dd/MM/yyyy HH:mm')}
            </div>
            <div className="note-preview">
              {note.content.substring(0, 50)}...
            </div>
          </div>
        ))}
      </div>
      
      <div className="note-editor">
        <h3>{selectedNote ? 'Editar Nota' : 'Nova Nota'}</h3>
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Registre suas observações clínicas..."
          rows={8}
        />
        <div className="note-actions">
          <button 
            onClick={selectedNote ? updateNote : saveNote}
            disabled={!currentNote.trim()}
          >
            {selectedNote ? 'Atualizar' : 'Salvar'}
          </button>
          {selectedNote && (
            <button onClick={() => {
              setSelectedNote(null);
              setCurrentNote('');
            }}>
              Cancelar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}; 