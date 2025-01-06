import { useContext, useEffect, useState } from "react"
import DresseurRoute from "../../Routes/DresseurRoute.tsx";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { deletePokemon, getPokemonById } from "../../services/Pokemon.tsx";
import { RxUpdate } from "react-icons/rx";
import { MdDelete } from "react-icons/md";



export default function PokemonDetails() {

    const [ name, setName] = useState("");
    const [ species, setSpecies ] = useState("");
    const [ level, setLevel ] = useState(1);
    const [ gender, setGender ] = useState("");
    const [ isShiny, setIsShiny ] = useState(false);
    const [ weight, setWeight ] = useState(0);
    const [ size, setSize ] = useState(0);

    const { trainerData } = useContext(DresseurRoute);

    const options = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const getPokemon = async () => {
            const data = await getPokemonById(trainerData, options.pokemonId)

            if (data.codeStatus === 200 ) {
                const pokemonName = data.pokemon.name;
                const pokemonSpecies = data.pokemon.species;
                const pokemonGender = data.pokemon.genderTypeCode;
                const pokemonLevel = data.pokemon.level;
                const pokemonShiny = data.pokemon.isShiny;
                const pokemonWeight = data.pokemon.weight;
                const pokemonSize = data.pokemon.size;

                setName(pokemonName);
                setGender(pokemonGender);
                setLevel(pokemonLevel);
                setSpecies(pokemonSpecies);
                setIsShiny(pokemonShiny);
                setWeight(pokemonWeight);
                setSize(pokemonSize);

            }
        };
        getPokemon();
    },[]);

    async function handleDelete(e: { preventDefault: () => void}) {
        e.preventDefault();

        const data = deletePokemon(trainerData, options.pokemonId)
        console.log(data);
        if ((await data).codeStatus === 200) {
            navigate("my-boxes")
        }
    }

    return (
        <div className="flex items-center justify-center h-screen mx-auto">
                <div id="select-modal" className="overflow-y-auto overflow-x-hidden z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="flex flex-col items-center pb-10">
                        <h5 className="mb-1 text-xl font-medium text-blue-900">
                            {name}
                        </h5>
                        <table className="table-auto border-collapse border border-gray-400 mt-4">
                            <tbody>
                            <tr>
                                <td className="border px-4 py-2">Species</td>
                                <td className="border px-4 py-2">{species}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Gender</td>
                                <td className="border px-4 py-2">{gender}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Level</td>
                                <td className="border px-4 py-2">{level}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Shiny</td>
                                <td className="border px-4 py-2">{isShiny ? "Yes" : "No"}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Size</td>
                                <td className="border px-4 py-2">{size}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Weight</td>
                                <td className="border px-4 py-2">{weight}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="flex items-center mt-4">
                            <NavLink to={"#"}>
                                <button
                                    className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    <RxUpdate className="mr-2"/>Modifier le Pokémon
                                </button>
                            </NavLink>
                            <NavLink to={`/my-boxes`}>
                                <button type="submit" onClick={handleDelete}
                                        className="flex items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <MdDelete className="mr-2"/>Supprimer le Pokémon
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>

        </div>
    )
}