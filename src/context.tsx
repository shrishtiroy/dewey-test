import React, { useState, useEffect, useCallback, useContext, createContext } from "react";

const URL = "https://openlibrary.org/search.json?title=";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${URL}${searchTerm}`);
      const data = await res.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((b) => ({
          id: b.key.replace("/works/", ""),
          title: b.title,
          author: b.author_name || ["Unknown"],
          cover_id: b.cover_i,
          first_publish_year: b.first_publish_year,
        }));
        setBooks(newBooks);
        setResultTitle(newBooks.length ? "Your Search Result" : "No Search Result Found!");
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
    } catch (err) {
      console.error(err);
      setBooks([]);
      setResultTitle("No Search Result Found!");
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider value={{ books, loading, searchTerm, setSearchTerm, resultTitle, setResultTitle }}>
      {children}
    </AppContext.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(AppContext);
}

