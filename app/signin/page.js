import React from 'react';
import Link from 'next/link';

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#141414] text-white p-5">
      <div className="bg-[#181818] p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-800">
        <h2 className="text-2xl font-bold text-[#ffb400] mb-6 text-center uppercase">Sign In</h2>
        
        <form className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="p-3 rounded bg-[#2b2b2b] border border-gray-700 focus:outline-none focus:border-[#ffb400] text-white"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="p-3 rounded bg-[#2b2b2b] border border-gray-700 focus:outline-none focus:border-[#ffb400] text-white"
          />
          
          <button className="bg-[#ffb400] text-black font-bold py-3 rounded mt-4 hover:bg-orange-500 transition duration-300">
            Login
          </button>
        </form>

        <div className="mt-6 text-[12px] md:text-sm text-center flex flex-col gap-3">
          <Link href="/forgot-password" title="forgot" className="text-gray-400 hover:text-white transition">
            Forgot Password?
          </Link>
          
          <p className="text-gray-400 text-[12px] md:text-sm">
            Don't have an account? 
            <Link href="/signup" className="text-[#ffb400] ml-2 font-semibold hover:underline">
              Sign Up Now
            </Link>
          </p>
        </div>
      </div>

      <Link href="/" className="mt-8 text-gray-500 hover:text-white transition text-[12px] md:text-sm flex items-center gap-2">
        <span>←</span> Back to Home
      </Link>
    </div>
  );
}