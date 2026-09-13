import logo from '../assets/logo-text.png';
import { HiOutlineMenu } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto  flex h-14 container items-center justify-between px-5 sm:px-6">

        <button className="text-xl md:hidden cursor-pointer transition">
          <HiOutlineMenu />
        </button>

        <div className="md:hidden">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-7 w-auto"
          />
        </div>
        {/* Logo */}
        <div className="hidden md:block cursor-pointer transition">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-8 w-auto"
          />
        </div>

        <div className="hidden items-center gap-7 text-[13px] text-gray-500 md:flex">
          <a href="#" className="brand-gradient-text ">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex items-center gap-2 text-[10px] sm:gap-4">
          {/* <button className="text-gray-500 cursor-pointer transition">
            Sign In
          </button>

          <button className="rounded-full brand-gradient px-3 py-2 font-medium text-white shadow-sm sm:px-5 cursor-pointer transition">
            Sign Up
          </button> */}

          <button className="btn btn-ghost btn-sm text-gray-500 cursor-pointer transition">
            Sign In
          </button>

          <button className="btn btn-sm rounded-full border-0 brand-gradient px-3 font-medium text-white shadow-sm sm:px-5 cursor-pointer transition">
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
}