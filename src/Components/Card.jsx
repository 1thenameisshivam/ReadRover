/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Card = ({ id, title, author }) => {
  const [isWishlist, setIsWishlist] = useState(false);

  useEffect(() => {
    checkIfWishlist();
  }, []);

  const checkIfWishlist = () => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const movieInWishlist = storedWishlist.some(
      (item) => item.id === parseInt(id)
    );
    setIsWishlist(movieInWishlist);
  };

  const addToWishlist = () => {
    const movie = {
      id: id,
      title: title,
      author: author,
    };
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isWishlist) {
      const updatedWishlist = storedWishlist.filter(
        (item) => item.id !== movie.id
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setIsWishlist(false);
    } else {
      storedWishlist.push(movie);
      localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
      setIsWishlist(true);
    }
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
        className={`${
          isWishlist ? "bg-green-400" : "bg-blue-500"
        } text-white px-4 py-2 mt-4 rounded-md`}
        onClick={addToWishlist}
      >
        {isWishlist ? "already in Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default Card;
