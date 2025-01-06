import React from "react";

export default function About() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-center text-gray-800">À propos du Projet :</h2>
                <div className="mt-4 text-center text-gray-600">
                    Ce projet est réalisé dans le cadre des cours de développement React à l'EPITA.
                </div>
                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li className="text-gray-800 font-medium">
                        Realiser par: Aymane TCHICH
                    </li>
                </ul>
                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li className="text-gray-800 font-medium">
                        Nom du professeur Name : Alex CINQ
                    </li>
                </ul>
            </div>
        </div>
    );
}
