import { render } from '@testing-library/react';
import { useContext } from 'react';
import AuthRoute from '../src/Routes/AuthRoute';
import { DresseurRoute } from '../src/Routes/DresseurRoute';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: jest.fn(),
}));

describe('AuthRoute component', () => {
    it('should return false if trainerId or accessToken is missing', () => {
        useContext.mockReturnValue({ trainerData: { trainerId: null, accessToken: null } });

        const result = AuthRoute();
        expect(result).toBe(false);
    });

    it('should return false if trainerId is 0', () => {
        useContext.mockReturnValue({ trainerData: { trainerId: 0, accessToken: 'validToken' } });

        const result = AuthRoute();
        expect(result).toBe(false);
    });

    it('should return true if trainerId and accessToken are valid', () => {
        useContext.mockReturnValue({ trainerData: { trainerId: 1, accessToken: 'validToken' } });

        const result = AuthRoute();
        expect(result).toBe(true);
    });

    it('should return false if accessToken is empty', () => {
        useContext.mockReturnValue({ trainerData: { trainerId: 1, accessToken: '' } });

        const result = AuthRoute();
        expect(result).toBe(false);
    });
});
