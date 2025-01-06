import fetchMock from 'jest-fetch-mock';
import {describe, afterEach, test, expect } from '@jest/globals'
import { getBoxes, createBoxe, getBoxeById } from '../src/services/Boxe';

// Mock the global fetch function
fetchMock.enableMocks();

describe('API Functions', () => {
  const trainerData = {
    trainerId: 1,
    accessToken: 'your-access-token',
  };

  afterEach(() => {
    fetchMock.resetMocks();
  });

  test('getBoxes function', async () => {
    const mockBoxes = [{ id: 1, name: 'Box1' }, { id: 2, name: 'Box2' }];

    fetchMock.mockResponseOnce(JSON.stringify(mockBoxes));

    const result = await getBoxes(trainerData);

    expect(fetchMock).toHaveBeenCalledWith(`http://localhost:8000/trainers/${trainerData.trainerId}/boxes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${trainerData.accessToken}`,
      },
    });

    expect(result).toEqual({ codeStatus: 200, boxes: mockBoxes });
  });

  test('createBoxe function', async () => {
    const boxeName = 'NewBox';

    fetchMock.mockResponseOnce(JSON.stringify({ id: 3 }));

    const result = await createBoxe(trainerData, boxeName);

    expect(fetchMock).toHaveBeenCalledWith(`http://localhost:8000/trainers/${trainerData.trainerId}/boxes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${trainerData.accessToken}`,
      },
      body: JSON.stringify({ name: boxeName }),
    });

    expect(result).toEqual({ codeStatus: 201, id: 3 });
  });

  test('getBoxeById function', async () => {
    const mockBox = { id: 1, name: 'Box1' };
    const boxeId = '1';

    fetchMock.mockResponseOnce(JSON.stringify(mockBox));

    const result = await getBoxeById(trainerData, boxeId);

    expect(fetchMock).toHaveBeenCalledWith(`http://localhost:8000/trainers/${trainerData.trainerId}/boxes/${boxeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${trainerData.accessToken}`,
      },
    });

    expect(result).toEqual({ codeStatus: 200, boxe: mockBox });
  });
});