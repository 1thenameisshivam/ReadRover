import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";

const Search = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        fetchBooks();
      }
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const fetchBooks = async () => {
    setLoader(true);
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
    );
    const data = await response.json();
    setLoader(false);
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
            author={book.author_name?.[0]}
            id={book.cover_i}
          />
        ))}
        {loader && <Loader />}
      </div>
    </div>
  );
};

export default Search;
