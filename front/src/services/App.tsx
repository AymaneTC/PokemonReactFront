import {Boxe} from "../Classes/Boxe.tsx";
import {Pokemon} from "../Classes/Pokemon.tsx";


export interface BoxBundleStatus {
    codeStatus: number;
    boxes?:Boxe[];
}

export interface BoxeInterface {
    codeStatus: number;
    boxe: Boxe;
}

export interface PokemonInterface {
    codeStatus: number;
    pokemon: Pokemon;
}

