/* eslint-disable react/prop-types */

const Card = ({ id, title, auther }) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center rounded-lg shadow-md p-4">
      <img
        src={`https://covers.openlibrary.org/b/id/${id}-M.jpg`}
        alt={title}
        className="w-36 h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">
        {title?.split(" ").slice(0, 3).join(" ")}
      </h2>
      <p className="text-gray-500 text-sm mt-1">{auther}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
        Add to Wishlist
      </button>
    </div>
  );
};

export default Card;
