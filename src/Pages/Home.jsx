import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="dark:bg-gray-100 h-[89vh]">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Discover Your Next
          <span className="dark:text-violet-600">Favorite Book</span>
          Today
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Join our community of book lovers and uncover hidden gems, classic
          tales, and new favorites. Your literary journey begins here!
        </p>
        <div className="flex flex-wrap justify-center">
          <Link
            to={"/search"}
            className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 "
          >
            Get started
          </Link>
          <button className="px-8 py-3 m-2 text-lg border rounded">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
