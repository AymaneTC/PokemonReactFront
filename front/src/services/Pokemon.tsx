import { TrainerType } from "../Classes/Dresseur.tsx";
import { CreatePokemon, Pokemon } from "../Classes/Pokemon.tsx";
import { PokemonInterface } from "./App.tsx";

export const getPokemons = async (
    trainerData: TrainerType,
    boxeId: string | undefined
) => {
    const url = `http://localhost:8000/trainers/${trainerData.trainerId}/boxes/${boxeId}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${trainerData.accessToken}`,
        },
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();

        return { codeStatus: 200, pokemons: data.pokemons }
    } catch (error) {
        console.error("Error in getPokemons:", error);
        return { codeStatus: 400, pokemons: [] }
    }
}

export const getPokemonById = async (
    trainerData: TrainerType,
    pokemonId: string | undefined
) => {
    const url = `http://localhost:8000/pokemons/${pokemonId}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${trainerData.accessToken}`
        },
    };

    try {
        const result = await fetch(url, options);
        const data = (await result.json()) as Pokemon;

        return { codeStatus: 200, pokemon: data}
    } catch (error) {
        console.error("Error in getPokemonById:", error);
        return { codeStatus: 400, pokemon: {id: 0, species: "", name: "", level: 1, genderTypeCode: "", size: 0, weight: 0, isShiny: false}};
    }
}


export const createPokemons = async (
    trainerData: TrainerType,
    pokemon: CreatePokemon
) => {
    const url = `http://localhost:8000/pokemons`;
    const options = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${trainerData.accessToken}`
        },
        body: JSON.stringify(pokemon)
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return { codeStatus: 201, id: data.id };
    } catch (error) {
        console.error("Your request doesn't have the fields expected");
        return  { codeStatus: 400 }
    }
}

export const deletePokemon = async (
    trainerData: TrainerType,
    pokemonId: string | undefined
) : Promise<PokemonInterface>  => {
    const url = `http://localhost:8000/pokemons/${pokemonId}`;
    const options = {
        method: "DELETE",
        headers: {
            'Content-Type' : "application/json",
            "Authorization" : `Bearer ${trainerData.accessToken}`
        }
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();
        console.error("The data of the pokemon have been entirely removed");
        return { codeStatus: 200, pokemon: data }
    } catch (error) {
        console.error("You are forbidden to perform this action");
        return { codeStatus: 403, pokemon: {id: 0, species: "", name: "", level: 1, genderTypeCode: "", size: 0, weight: 0, isShiny: false}  };
    }
}