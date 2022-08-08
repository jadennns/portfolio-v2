import { BsList } from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center" aria-label="Navbar">
      <nav className="max-w-7xl drop-shadow-xl lg:rounded-md flex justify-between p-4 mt-0 lg:mt-5 w-full lg:w-11/12 z-[1]">
        <Link href={"/"}>
          <h1 className="font-semibold underline underline-offset-2 cursor-pointer text-[#e46201] text-2xl">
            JADENNNS
          </h1>
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          <a href="#about">
            <h2 className="text-gray-100 text-lg hover:underline underline-offset-2 cursor-pointer">
              About Me
            </h2>
          </a>
          <a href="#projects">
            <h2 className="text-gray-100 text-lg hover:underline underline-offset-2 cursor-pointer">
              Projects
            </h2>
          </a>
        </div>
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn m-1 btn-warning">
            <BsList size={20} />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content bg-warning-content menu p-2 shadow rounded-box w-52"
          >
            <li>
              <a href="#about" className="text-gray-100">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-100">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
