
import React, { createContext, useContext, useState } from "react";

interface Book {
  cover: string;
  title: string;
  author: string;
  rating?: number;
  liked?: boolean;
}

interface ShelfContextType {
  recentlyRead: Book[];
  addToShelf: (book: Book) => void;
  removeFromShelf: (title: string) => void;
  isOnShelf: (title: string) => boolean;
}

const ShelfContext = createContext<ShelfContextType | undefined>(undefined);

export const ShelfProvider = ({ children }: { children: React.ReactNode }) => {
  const [recentlyRead, setRecentlyRead] = useState<Book[]>([]);

  const addToShelf = (book: Book) => {
    setRecentlyRead((prev) => [...prev, book]);
  };
  
  const removeFromShelf = (title: string) => {
    setRecentlyRead((prev) => prev.filter((b) => b.title !== title));
  };
  
  const isOnShelf = (title: string) => {
    return recentlyRead.some((b) => b.title === title);
  };

  return (
    <ShelfContext.Provider value={{ recentlyRead, addToShelf, removeFromShelf, isOnShelf}}>
      {children}
    </ShelfContext.Provider>
  );
};

export const useShelfContext = () => {
  const context = useContext(ShelfContext);
  if (!context) throw new Error("useShelfContext must be used within ShelfProvider");
  return context;
};
