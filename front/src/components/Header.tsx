import { NavLink } from 'react-router-dom';
import AuthRoute from '../Routes/AuthRoute.tsx';
import { useContext } from 'react';
import TrainerRoute, { defaultTrainerData } from '../Routes/TrainerRoute.tsx';
import { MdLogout } from "react-icons/md";
import React from 'react';

export default function Header() {
  const isLoggedIn = AuthRoute();
  const { setTrainerData } = useContext(TrainerRoute);

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setTrainerData(defaultTrainerData);
  };

  return (
    <div className="bg-green-600 dark:bg-green-800 text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <NavLink to={"/"} className="text-2xl font-semibold text-white hover:text-gray-200">
              PokemonAPI
            </NavLink>
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 flex justify-end">
            <ul className="flex gap-6 items-center">
              {isLoggedIn ? (
                <>
                  <li className="text-white hover:text-gray-200 transition-all duration-300">
                    <NavLink to="/my-boxes">My Boxes</NavLink>
                  </li>
                  <li className="text-white hover:text-gray-200 transition-all duration-300">
                    <NavLink to="/login">My Trades</NavLink>
                  </li>
                  <li className="text-white hover:text-gray-200 transition-all duration-300">
                    <NavLink to="/login">Search for Trainer</NavLink>
                  </li>
                  <li className="text-white hover:text-gray-200 transition-all duration-300">
                    <NavLink to="/login">Search for Pokemon</NavLink>
                  </li>
                  <li className="text-white hover:text-gray-200 transition-all duration-300">
                    <NavLink to="/login">My Profile</NavLink>
                  </li>
                  <li className="flex items-center text-white hover:text-gray-200 transition-all duration-300">
                    <MdLogout className="mr-2" />
                    <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-white hover:text-gray-200 transition-all duration-300">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li className="text-white hover:text-gray-200 transition-all duration-300">
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}