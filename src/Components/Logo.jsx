import { IoLibrary } from "react-icons/io5";
const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <span className=" text-2xl bg-violet-600 text-white rounded p-2">
        <IoLibrary />
      </span>
      <span className=" text-2xl font-mono">ReadRover</span>
    </div>
  );
};

export default Logo;
