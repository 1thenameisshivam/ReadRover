import Card from "../Components/Card";
const BookShelf = () => {
  const data = JSON.parse(localStorage.getItem("wishlist"));

  return (
    <div>
      <h1 className="text-3xl text-violet-500 font-mono text-center">
        Collect Your Literary Dreams: Wishlist Your Favorites!
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mt-8 mx-4">
        {data?.map((book) => (
          <Card
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
