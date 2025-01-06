import fetchMock from 'jest-fetch-mock';
import { Login } from '../src/services/Login';
import { describe, test, afterEach, expect } from '@jest/globals';

// Mock the global fetch function
fetchMock.enableMocks();

describe('LoginService', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  test('should return the correct response on successful login', async () => {
    const mockData = {
      accessToken: 'your-access-token',
      trainerId: 'your-trainer-id',
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockData)); // Simulate successful login response

    const result = await Login('validUsername', 'validPassword');

    // Check if fetch was called with the correct parameters
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: 'validUsername',
        password: 'validPassword',
      }),
    });

    // Assert that the result matches the expected output
    expect(result).toEqual({
      accessToken: 'your-access-token',
      trainerId: 'your-trainer-id',
      codeStatus: 200,
    });
  });

  test('should return an error when network error occurs', async () => {
    fetchMock.mockRejectOnce(new Error('Network error')); // Simulate a network error

    const result = await Login('validUsername', 'validPassword');

    // Check if fetch was called with the correct parameters
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: 'validUsername',
        password: 'validPassword',
      }),
    });

    // Assert that the result matches the expected error for network issues
    expect(result).toEqual({
      codeStatus: 404,
    });
  });

  test('should return an error when server returns an unexpected status', async () => {
    fetchMock.mockResponseOnce('Unexpected error', { status: 500 }); // Simulate a server error with status 500

    const result = await Login('validUsername', 'validPassword');

    // Check if fetch was called with the correct parameters
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: 'validUsername',
        password: 'validPassword',
      }),
    });

    // Assert that the result matches the expected error for server issues
    expect(result).toEqual({
      codeStatus: 404,
    });
  });
});
