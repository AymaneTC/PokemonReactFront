import { NavLink } from 'react-router-dom';
import AuthRoute from '../Routes/AuthRoute.tsx';
import { useContext } from 'react';
import DresseurRoute, { defaultTrainerData } from '../Routes/DresseurRoute.tsx';
import { MdLogout } from "react-icons/md";
import React from 'react';

export default function Header() {
  const isLoggedIn = AuthRoute();
  const { setTrainerData } = useContext(DresseurRoute);

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setTrainerData(defaultTrainerData);
  };

  return (
    <div className="bg-green-600 dark:bg-green-800 text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
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
                    <NavLink to="/my-boxes">Mes boîtes</NavLink>
                  </li>
                  <li className="text-white hover:text-gray-200 transition-all duration-300">
                    <NavLink to="/login">Mes échanges</NavLink>
                  </li>
                  <li className="text-white hover:text-gray-200 transition-all duration-300">
                    <NavLink to="/login">Chercher un Dresseur</NavLink>
                  </li>
                  <li className="text-white hover:text-gray-200 transition-all duration-300">
                    <NavLink to="/login">Chercher un Pokémon</NavLink>
                  </li>
                  <li className="text-white hover:text-gray-200 transition-all duration-300">
                    <NavLink to="/login">Profil utilisateur</NavLink>
                  </li>
                  <li className="flex items-center text-white hover:text-gray-200 transition-all duration-300">
                    <MdLogout className="mr-2" />
                    <NavLink to="/login" onClick={handleLogout}>Déconnexion</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-white hover:text-gray-200 transition-all duration-300">
                    <NavLink to="/login">Se connecter</NavLink>
                  </li>
                  <li className="text-white hover:text-gray-200 transition-all duration-300">
                    <NavLink to="/register">S’inscrire</NavLink>
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