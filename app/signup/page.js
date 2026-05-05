import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#141414] text-white p-5">
      <div className="bg-[#181818] p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-800">
        <h2 className="text-2xl md:text-2xl font-bold text-[#ffb400] mb-6 text-center">Sign Up</h2>
        
        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="p-3 rounded bg-gray-700 border border-gray-600 text-[13px] md:text-sm focus:outline-none focus:border-[#ffb400]"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="p-3 rounded bg-gray-600 border border-gray-600  text-[13px] md:text-sm focus:outline-none focus:border-[#ffb400]"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="p-3 rounded bg-gray-700 border border-gray-600  text-[13px] md:text-sm focus:outline-none focus:border-[#ffb400]"
          />
          
          <button className="bg-[#ffb400] text-black font-bold  py-2 md:py-3 rounded mt-2 hover:bg-orange-500 transition">
            Create Account
          </button>
        </form>

        <p className="mt-6  text-[12px] md:text-sm text-gray-400 text-center">
          Already have an account? 
          <Link href="/about" className="text-[#ffb400] ml-2 hover:underline">Sign In</Link>
        </p>
      </div>

      <Link href="/" className="mt-8 text-[12px] md:text-sm text-gray-500 hover:text-white text-sm">
        ← Back to Home
      </Link>
    </div>
  );
}