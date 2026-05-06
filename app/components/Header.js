import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
     <header className="flex items-center justify-between bg-[#1c1c1e] px-2 py-4 w-full border-b border-gray-800 gap-1">
      
      <div className="flex-shrink-0">
        <Link href="/">
          <h1 className="text-yellow-500 text-sm sm:text-base md:text-2xl font-black uppercase whitespace-nowrap">
            BERRY<span className="text-white">MOVIE</span>
          </h1>
        </Link>
      </div>

      <section className="flex items-center gap-2 sm:gap-4 md:gap-6 text-[10px] sm:text-[12px] text-white md:text-sm font-bold uppercase whitespace-nowrap overflow-x-auto scrollbar-hide px-1">
        <Link href="/home">
          <button className="hover:text-[#ffb400] transition">Home</button>
        </Link>
        <Link href="/signin">
          <button className="hover:text-[#ffb400] transition">Sign In</button>
        </Link>
        <Link href="/signup">
          <button className="hover:text-[#ffb400] transition">Sign Up</button>
        </Link>
        <Link href="/forgot-password">
          <button className="hover:text-[#ffb400] transition">Forgot Password</button>
        </Link>
        <Link href="/404">
          <button className="hover:text-[#ffb400] transition">404</button>
        </Link>
      </section>

    </header>
  );
};

export default Header;
