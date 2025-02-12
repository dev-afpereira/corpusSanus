import { useState, useEffect, useCallback } from 'react';
import useAuth  from '../../hooks/useAuth';
import { db } from '../../services/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { ShoppingList as ShoppingListType, ShoppingItem } from '../../types';

const CATEGORIES = ['Proteínas', 'Vegetais', 'Temperos', 'Outros'] as const;

const ShoppingList = () => {
  const [currentList, setCurrentList] = useState<ShoppingListType | null>(null);
  const { user } = useAuth();

  const loadCurrentList = useCallback(async () => {
    if (!user) return;

    try {
      const docRef = doc(db, 'users', user.uid, 'shopping', 'currentList');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCurrentList(docSnap.data() as ShoppingListType);
      } else {
        const newList: ShoppingListType = {
          id: 'currentList',
          items: [],
          createdAt: new Date().toISOString()
        };
        await setDoc(docRef, newList);
        setCurrentList(newList);
      }
    } catch (error) {
      console.error('Erro ao carregar lista:', error);
    }
  }, [user]);

  useEffect(() => {
    loadCurrentList();
  }, [loadCurrentList]);

  const toggleItem = async (itemId: string) => {
    if (!currentList || !user) return;

    const updatedItems = currentList.items.map(item => 
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );

    try {
      const docRef = doc(db, 'users', user.uid, 'shopping', 'currentList');
      await updateDoc(docRef, { items: updatedItems });
      setCurrentList({ ...currentList, items: updatedItems });
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
    }
  };

  const addItem = async (name: string, category: typeof CATEGORIES[number]) => {
    if (!currentList || !user) return;

    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name,
      category,
      checked: false
    };

    try {
      const docRef = doc(db, 'users', user.uid, 'shopping', 'currentList');
      await updateDoc(docRef, { 
        items: [...currentList.items, newItem]
      });
      setCurrentList({
        ...currentList,
        items: [...currentList.items, newItem]
      });
    } catch (error) {
      console.error('Erro ao adicionar item:', error);
    }
  };

  return (
    <div className="shopping-list">
      <h2>Lista de Compras</h2>
      
      <div className="add-item-form">
        <input 
          type="text" 
          placeholder="Novo item..."
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              const input = e.target as HTMLInputElement;
              addItem(input.value, 'Outros');
              input.value = '';
            }
          }}
        />
      </div>

      <div className="lists-container">
        {CATEGORIES.map(category => (
          <div key={category} className="category-group">
            <h3>{category}</h3>
            <div className="items-list">
              {currentList?.items
                .filter(item => item.category === category)
                .map(item => (
                  <div 
                    key={item.id} 
                    className={`item ${item.checked ? 'checked' : ''}`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <span className="checkbox">
                      {item.checked ? '✓' : ''}
                    </span>
                    <span className="item-name">{item.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList; 