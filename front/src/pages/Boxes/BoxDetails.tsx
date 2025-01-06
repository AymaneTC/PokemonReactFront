import { useContext, useEffect, useState } from "react"
import DresseurRoute from "../../Routes/DresseurRoute.tsx";
import { Pokemon } from "../../Classes/Pokemon.tsx";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { deleteBoxe, getBoxeById } from "../../services/Boxe.tsx";
import { MdDelete } from "react-icons/md";

export default function BoxDetails() {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [boxeName, setBoxeName] = useState("");
    const { trainerData } = useContext(DresseurRoute);
    const navigate = useNavigate();

    const options = useParams();

    useEffect(() => {
        const getBoxe = async () => {
            const data = await getBoxeById(trainerData, options.boxeId)

            if (data.codeStatus === 200) {
                const boxeName = data.boxe?.name;
                const pokemons = data.boxe?.pokemons as Pokemon[];

                setPokemons(pokemons);
                setBoxeName(boxeName);
            }
        };
        getBoxe();
    }, []);

    async function handleDelete(e: { preventDefault: () => void }) {
        e.preventDefault();

        const data = await deleteBoxe(trainerData, options.boxeId);
        if (data.codeStatus === 200) {
            navigate("/my-boxes")
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">{boxeName}</h1>
                    <div className="flex space-x-4">
                        <NavLink to={`/boxes/${options.boxeId}/new-pokemon`}>
                            <button className="text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500 rounded-lg text-sm px-5 py-2.5">
                                Create a new Pokemon
                            </button>
                        </NavLink>
                        <button onClick={handleDelete} className="text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-500 rounded-lg text-sm px-5 py-2.5">
                            <MdDelete className="mr-2 inline" /> Delete Box
                        </button>
                    </div>
                </div>
                <ul role="list" className="grid grid-cols-3 gap-4">
                    {pokemons.map((pokemon) => (
                        <NavLink key={pokemon.id} to={`/pokemons/${pokemon.id}`} className="p-4 bg-blue-100 rounded-lg shadow">
                            <div className="text-center">
                                <h5 className="text-xl font-medium">{pokemon.name}</h5>
                                <p>Species: {pokemon.species}</p>
                                <p>Gender: {pokemon.genderTypeCode}</p>
                                <p>Level: {pokemon.level}</p>
                                <p>Shiny: {pokemon.isShiny ? "Yes" : "No"}</p>
                                <p>Size: {pokemon.size}</p>
                                <p>Weight: {pokemon.weight}</p>
                            </div>
                        </NavLink>
                    ))}
                </ul>
            </div>
        </div>
    )
}
