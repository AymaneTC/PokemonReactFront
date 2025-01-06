import { TrainerType } from '../src/Classes/Dresseur';
import {describe, test, expect } from '@jest/globals'

describe('TrainerType', () => {
  test('TrainerType with valid values', () => {
    const trainer: TrainerType = {
      trainerId: 1,
      accessToken: 'your_access_token_here',
    };

    expect(trainer).toBeDefined();
  });

  test('TrainerType with different values', () => {
    const trainer: TrainerType = {
      trainerId: 2,
      accessToken: 'another_access_token',
    };

    expect(trainer).toBeDefined();
  });

  // Add more tests as needed
});