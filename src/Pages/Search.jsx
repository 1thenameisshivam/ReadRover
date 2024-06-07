import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Search = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        fetchBooks();
      }
    }, 100);
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const fetchBooks = async () => {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
    );
    const data = await response.json();
    console.log(data.docs);
    setBooks(data.docs);
  };

  return (
    <div className="min-h-[89vh] bg-gray-100">
      <h1 className="text-center text-2xl text-violet-700 font-mono">
        Find Your Next Great Read Instantly
      </h1>
      <div className="w-screen flex justify-center mt-8">
        <label htmlFor="search" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" p-2 w-1/2 mt-4 text-lg text-gray-800 bg-gray-200  rounded border-none outline-none "
          placeholder="Search for books..."
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-8 mx-4">
        {books.map((book) => (
          <Card
            key={book.key}
            title={book.title}
            auther={book.author_name?.[0]}
            id={book.cover_i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
