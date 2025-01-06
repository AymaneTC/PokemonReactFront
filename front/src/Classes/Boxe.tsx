import { Pokemon } from "./Pokemon.tsx"

export type Boxe = {
    id: number,
    name: string,
    pokemons?: Pokemon[]
};

export type Boxes = {
    boxes: Boxe[]
};