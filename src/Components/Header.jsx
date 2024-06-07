import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="p-2">
      <div className="container flex justify-between flex-wrap items-center h-16 mx-auto">
        <Link to={"/"}>
          <Logo />
        </Link>
        <ul className="items-stretch space-x-3 flex">
          <li className="flex">
            <Link
              to={"/"}
              className="flex items-center px-4 -mb-1 border-b-2 hover:border-violet-500 dark:border-"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              to={"/search"}
              className="flex items-center px-4 -mb-1 border-b-2 hover:border-violet-500 dark:border-"
            >
              Search
            </Link>
          </li>
          <li className="flex">
            <Link
              to={"/bookself"}
              className="flex items-center px-4 -mb-1 border-b-2 hover:border-violet-500 dark:border-"
            >
              My Bookshelf
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
