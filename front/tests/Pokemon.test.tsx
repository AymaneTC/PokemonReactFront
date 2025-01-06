import {
    Pokemon,
    CreatePokemon,
    DeletePokemon,
    UpdatePokemon,
    SearchPokemon,
  } from '../src/Classes/Pokemon';

import {describe, test, expect } from '@jest/globals'
  
  describe('Pokemon Types', () => {
    test('Pokemon type', () => {
      const pokemon: Pokemon = {
        id: 1,
        species: 'Pikachu',
        name: 'Pika',
        level: 10,
        genderTypeCode: 'M',
        size: 0.5,
        weight: 5,
        isShiny: false,
      };
  
      expect(pokemon).toBeDefined();
    });
  
    test('CreatePokemon type', () => {
      const createPokemon: CreatePokemon = {
        species: 'Bulbasaur',
        name: 'Bulby',
        level: 5,
        genderTypeCode: 'F',
        size: 0.7,
        weight: 6,
        isShiny: true,
      };
  
      expect(createPokemon).toBeDefined();
    });
  
    test('DeletePokemon type', () => {
      const deletePokemon: DeletePokemon = {
        species: 'Charmander',
        name: 'Char',
        level: 8,
        genderTypeCode: 'M',
        size: 0.6,
        weight: 7,
        isShiny: false,
      };
  
      expect(deletePokemon).toBeDefined();
    });
  
    test('UpdatePokemon type', () => {
      const updatePokemon: UpdatePokemon = {
        updateId: 1,
        updateSpecies: 'Squirtle',
        updateName: 'Squirt',
        updateLevel: 12,
        updateGenderTypeCode: 'F',
        updateSize: 0.8,
        updateWeight: 8,
        updateIsShiny: true,
      };
  
      expect(updatePokemon).toBeDefined();
    });
  
    test('SearchPokemon type', () => {
      const searchPokemon: SearchPokemon = {
        filters: {
          species: 'Eevee',
          name: 'Vee',
          minLevel: 10,
          maxLevel: 20,
          minHeight: 0.5,
          maxHeight: 1,
          minWeight: 5,
          maxWeight: 10,
          isShiny: true,
        },
      };
  
      expect(searchPokemon).toBeDefined();
    });
  });