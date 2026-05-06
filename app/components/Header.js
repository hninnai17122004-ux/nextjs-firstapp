import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#1c1c1e] px-4 py-5 text-white border-b border-gray-800">
      <div className="text-yellow-500 text-xl md:text-2xl font-bold uppercase cursor-pointer shrink-0">
        <Link href="/">
          BERRY<span className="text-white">MOVIE</span>
        </Link>
      </div>

      <section className="flex items-center gap-4 md:gap-8 text-[10px]  md:text-[15px] mr-3 ml-3">
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
        <button className="hover:text-[#ffb400] transition">404</button>
      </section>
    </header>
  );
};

export default Header;
