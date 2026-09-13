import logo from '../assets/logo-text.png';
import { HiOutlineMenu } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">

        <button className="text-xl md:hidden">
          <HiOutlineMenu />
        </button>

        <div className="md:hidden">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-7 w-auto"
          />
        </div>

        <div className="hidden md:block">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-8 w-auto"
          />
        </div>

        <div className="hidden items-center gap-7 text-[10px] text-gray-500 md:flex">
          <a href="#" className="text-pink-600">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex items-center gap-2 text-[10px] sm:gap-4">
          <button className="text-gray-500">
            Sign In
          </button>

          <button className="rounded-full bg-pink-600 px-3 py-2 font-medium text-white shadow-sm sm:px-5">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}