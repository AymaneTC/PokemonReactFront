import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DresseurRoute from "../../Routes/DresseurRoute.tsx";
import { createPokemons } from "../../services/Pokemon.tsx";

export default function CreatePokemon() {
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [level, setLevel] = useState(1);
    const [gender, setGender] = useState("");
    const [isShiny, setIsShiny] = useState("");
    const [size, setSize] = useState(0);
    const [weight, setWeight] = useState(0);

    const navigate = useNavigate();
    const { trainerData } = useContext(DresseurRoute);

    async function handleCreate(e: { preventDefault: () => void }) {
        e.preventDefault();

        const result = await createPokemons(trainerData, {
            name, species, level,
            genderTypeCode: gender,
            isShiny: isShiny === "true",
            size, weight
        });

        if (result.codeStatus === 201) {
            navigate("/");
        } else {
            console.error("Error during creation of the pokemon");
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Create New Pokemon</h2>
                    <p className="mt-2 text-sm text-gray-600">Enter the details for your new Pokémon</p>
                </div>

                <form onSubmit={handleCreate} className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="name"
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="species" className="block text-sm font-medium text-gray-700">Species</label>
                        <input
                            value={species}
                            onChange={(e) => setSpecies(e.target.value)}
                            name="species"
                            type="text"
                            id="species"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="level" className="block text-sm font-medium text-gray-700">Level</label>
                        <input
                            value={level}
                            onChange={(e) => setLevel(parseInt(e.target.value))}
                            name="level"
                            type="number"
                            id="level"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            name="gender"
                            id="gender"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        >
                            <option value="">Select Gender</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                            <option value="NOT_DEFINED">Not Defined</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="isShiny" className="block text-sm font-medium text-gray-700">Is Shiny?</label>
                        <input
                            value={isShiny}
                            onChange={(e) => setIsShiny(e.target.value)}
                            name="isShiny"
                            type="text"
                            id="isShiny"
                            placeholder="true/false"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
                        <input
                            value={size}
                            onChange={(e) => setSize(parseFloat(e.target.value))}
                            name="size"
                            type="number"
                            id="size"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
                        <input
                            value={weight}
                            onChange={(e) => setWeight(parseFloat(e.target.value))}
                            name="weight"
                            type="number"
                            id="weight"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Create Pokemon
                    </button>
                </form>
            </div>
        </div>
    );
}
