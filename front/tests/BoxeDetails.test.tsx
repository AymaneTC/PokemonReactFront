import { Boxe, Boxes } from '../src/Classes/Boxe';
import {describe, test, expect } from '@jest/globals'

describe('Boxe Type', () => {
  test('Boxe type with pokemons', () => {
    const boxe: Boxe = {
      id: 1,
      name: 'Box1',
      pokemons: [
        {
          id: 101,
          species: 'Pikachu',
          name: 'Pika',
          level: 10,
          genderTypeCode: 'M',
          size: 0.5,
          weight: 5,
          isShiny: false,
        },
        // Add more Pokemon objects as needed
      ],
    };

    expect(boxe).toBeDefined();
  });

  test('Boxe type without pokemons', () => {
    const boxe: Boxe = {
      id: 2,
      name: 'Box2',
    };

    expect(boxe).toBeDefined();
  });
});

describe('BoxesMain Type', () => {
  test('BoxesMain type with multiple boxes', () => {
    const boxes: Boxes = {
      boxes: [
        {
          id: 1,
          name: 'Box1',
          pokemons: [
            {
              id: 101,
              species: 'Pikachu',
              name: 'Pika',
              level: 10,
              genderTypeCode: 'M',
              size: 0.5,
              weight: 5,
              isShiny: false,
            },
            // Add more Pokemon objects as needed
          ],
        },
        {
          id: 2,
          name: 'Box2',
          pokemons: [
            {
              id: 102,
              species: 'Bulbasaur',
              name: 'Bulby',
              level: 5,
              genderTypeCode: 'F',
              size: 0.7,
              weight: 6,
              isShiny: true,
            },
            // Add more Pokemon objects as needed
          ],
        },
        // Add more Boxe objects as needed
      ],
    };

    expect(boxes).toBeDefined();
  });

  test('BoxesMain type with an empty array', () => {
    const boxes: Boxes = {
      boxes: [],
    };

    expect(boxes).toBeDefined();
  });
});