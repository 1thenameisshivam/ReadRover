/* eslint-disable react/prop-types */
import { useState } from "react";

const Card = ({ id, title, author }) => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const addToWishlist = () => {
    const newBook = { id, title, author };
    const updatedWishlist = [...wishlist, newBook];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="bg-white flex flex-col justify-center relative items-center rounded-lg shadow-md p-4">
      <img
        src={`https://covers.openlibrary.org/b/id/${id}-M.jpg`}
        alt={title}
        className="w-36 h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">
        {title?.split(" ").slice(0, 3).join(" ")}
      </h2>
      <p className="text-gray-500 text-sm mt-1">{author}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
        onClick={addToWishlist}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default Card;
