import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#181818] px-5  py-5 text-white border-b-3 border-yellow-800 ">
      
      <div className="text-[#ffb400] text-2xl font-bold uppercase cursor-pointer">
        <Link href="/">
          HOT<span className="text-white">FLIX</span>
        </Link>
      </div>

      
      <div className="flex gap-4 md:gap-10 text-[10px] md:text-sm">
        <Link href="/home">
          <button className="hover:text-[#ffb400] transition">Home</button>
        </Link>
        
        <Link href="/signin">
          <button className="hover:text-[#ffb400] transition">Sign In</button>
        </Link>

<Link href="/signup">
        <button className="hover:text-[#ffb400] transition">Sign Up</button></Link>
        <Link href="/forgotpw">
        <button className="hover:text-[#ffb400] transition">Forgot Password</button></Link>
      </div>
    
    </header>
    
  );
};

export default Header;

