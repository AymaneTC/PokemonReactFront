import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-600 fixed bottom-0 left-0 w-full shadow dark:bg-green-800 p-3">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center text-center">
        {/* Left: About Link */}
        <div className="text-sm font-semibold text-white">
          <a href="/PokemonReactFront/front/public" className="hover:underline">
            PokemonAPI
          </a>
        </div>

        {/* Center: Made By */}
        <div className="text-sm text-white">
          © Made by{' '}
          <span className="font-bold">
            <a
              href="https://github.com/AymaneTC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Aymane Tchich
            </a>
          </span>
        </div>

        {/* Right: Pokemon Title */}
        <div className="text-lg text-white">
          <NavLink className="text-white hover:underline" to="/about">
            about
          </NavLink>
        </div>
      </div>
    </footer>
  );
}