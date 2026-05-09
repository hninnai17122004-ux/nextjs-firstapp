"use client"
import React from 'react';
import Link from 'next/link';



const Header = () => {
  return (
    <header className="bg-[#1c1c1e] w-full border-b border-gray-800 relative z-[100]">
      <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto relative">

        
          <h1 className="text-yellow-500 text-xl font-black uppercase tracking-tighter">
            BERRY<span className="text-white">MOVIE</span>
          </h1>
        

        <label className="md:hidden cursor-pointer text-white p-2 z-[130] relative w-10 h-10 flex items-center justify-center select-none">
          <input type="checkbox" className="peer hidden" />

          <svg className="w-8 h-8 block peer-checked:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
          </svg>


          <svg className="hidden peer-checked:block w-8 h-8 text-yellow-500 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>

          <div className="hidden peer-checked:flex absolute top-full right-0 mt-4 w-56 flex-col items-start gap-2 bg-[#252529] p-4 rounded-xl shadow-2xl border border-gray-700">
            <Link href="/home" className="text-white hover:text-[#ffb400] font-bold w-full p-2">Home</Link>
            <Link href="/signin" className="text-white hover:text-[#ffb400] font-bold w-full p-2">Sign In</Link>
            <Link href="/signup" className="text-white hover:text-[#ffb400] font-bold w-full p-2">Sign Up</Link>
            <Link href="/fotgot-password" className="text-white hover:text-yellow-500 font-bold w-full p-2">Forgot Password?</Link>
            <Link href="/404">
            <button className='hover:text-[#ffb400] font-bold w-full p-2 text-white'>404</button></Link>
          </div>
        </label>

        <nav className="hidden md:flex flex items-center justify-between gap-6 test-xl ml-auto whitespace-nowrap">
          <Link href="/home" className="text-white hover:text-[#ffb400]font-bold font-bold w-full p-2">Home</Link>
          <Link href="/signin" className="text-white hohover:text-[#ffb400] font-bold w-full p-2">Sign In</Link>
          <Link href="/signup" className="text-white hover:text-[#ffb400] font-bold w-full p-2">Sign Up</Link>
          <Link href="/forgot-password" className="text-white hover:text-[#ffb400] font-bold w-full p-2">Forgot Password?</Link>
          <Link href="/404">
          <button className='hover:text-[#ffb400] font-bold w-full p-2 text-white'>404</button></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
