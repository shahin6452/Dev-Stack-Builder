import logo from '../assets/logo-text.png';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <div>
          <img 
            src={logo} 
            alt="Dev Stack Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-7 text-[10px] text-gray-500">
          <a href="#" className="text-pink-600"> Home </a>
          <a href="#"> Technologies </a>
          <a href="#">Projects</a>
					<a href="#"> About </a>
          <a href="#"> Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 text-[10px]">
          <button className="text-gray-500">
            Sign In
          </button>

          <button className="rounded-full bg-pink-600 px-5 py-2 font-medium text-white shadow-sm">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}