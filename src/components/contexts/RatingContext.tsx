import { createContext, useContext, useState, ReactNode } from 'react';

interface Book {
  id: string;
  title: string;
  cover: string;
  author: string;
}

interface Rating {
  category: 'love' | 'like' | 'hate' | 'dnf';
  position: number;
  book: Book;
}

interface PendingInsert {
  book: Book;
  category: Rating['category'];
  low: number;
  high: number;
  sortedIds: string[];
}

interface RatingContextType {
  ratings: Record<string, Rating>;
  pendingInsert: PendingInsert | null;
  handleRatingCategory: (book: Book, category: Rating['category']) => void;
  resolveComparison: (preferred: 'more' | 'less') => void;
  setRating: (bookId: string, book: Book, category: Rating['category'], position: number) => void;
  clearPendingInsert: () => void;
}

const RatingContext = createContext<RatingContextType | undefined>(undefined);

export const useRatingContext = () => {
  const context = useContext(RatingContext);
  if (!context) throw new Error("useRatingContext must be used within a RatingProvider");
  return context;
};

export const RatingProvider = ({ children }: { children: ReactNode }) => {
  const [ratings, setRatings] = useState<Record<string, Rating>>({});
  const [pendingInsert, setPendingInsert] = useState<PendingInsert | null>(null);

  const setRating = (bookId: string, book: Book, category: Rating['category'], position: number) => {
    setRatings(prev => ({ ...prev, [bookId]: { book, category, position } }));
  };

  const handleRatingCategory = (book: Book, category: Rating['category']) => {
    if(category == 'dnf'){
      setRating(book.id, book, category, 1)
      return;
    }

    const sorted = Object.entries(ratings)
      .filter(([_, r]) => r.category === category)
      .sort(([, a], [, b]) => a.position - b.position)
      .map(([id]) => id);
    
    if (sorted.length === 0) {
      // If no other books in that category, skip tie popup and just add
      setRating(book.id, book, category, 0);
      return;
    }

    setPendingInsert({ book, category, low: 0, high: sorted.length, sortedIds: sorted });
  };

  const resolveComparison = (preferred: 'more' | 'less') => {
    if (!pendingInsert) return;
    const { book, category, low, high, sortedIds } = pendingInsert;

    if (low === high) {
      const newRatings = { ...ratings };
      for (const [id, value] of Object.entries(newRatings)) {
        if (value.category === category && value.position >= low) {
          newRatings[id] = { ...value, position: value.position + 1 };
        }
      }
      newRatings[book.id] = { book, category, position: low };
      setRatings(newRatings);
      setPendingInsert(null);
      return;
    }

    const mid = Math.floor((low + high) / 2);
    const next = preferred === 'more' ? { low, high: mid } : { low: mid + 1, high };
    setPendingInsert({ ...pendingInsert, ...next });
  };

  const clearPendingInsert = () => setPendingInsert(null);

  return (
    <RatingContext.Provider
      value={{ ratings, pendingInsert, handleRatingCategory, resolveComparison, setRating, clearPendingInsert }}
    >
      {children}
    </RatingContext.Provider>
  );
};
