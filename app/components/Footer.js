import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-white text-2xl font-bold tracking-widest mb-4">
          MOVIE<span className="text-red-600">HOME</span>
        </h2>
        
        <p className="text-sm max-w-sm mx-auto leading-relaxed mb-8">
          The best place to discover and watch your favorite cinema.
          Experience the magic of movies.
        </p>

        <div className="flex justify-center space-x-8 text-sm font-medium">
          <span className="hover:text-white cursor-pointer transition">Facebook</span>
          <span className="hover:text-white cursor-pointer transition">Instagram</span>
          <span className="hover:text-white cursor-pointer transition">Telegram</span>
        </div>

        <div className="mt-10 text-[10px] uppercase tracking-widest text-gray-600">
          &copy; 2026 MovieHome. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer;