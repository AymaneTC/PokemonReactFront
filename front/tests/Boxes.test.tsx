import { screen, render, waitFor } from '@testing-library/react';
import { getBoxes } from '../src/services/Boxe';
import { BrowserRouter as Router } from 'react-router-dom';
import BoxesMain from '../src/pages/Boxes/BoxesMain';
import React from 'react';
import { jest, describe, test, expect } from '@jest/globals';

jest.mock('../src/services/Boxe');

describe('Tests for BoxesMain component', () => {
    const mockedGetBoxes = getBoxes as jest.MockedFunction<typeof getBoxes>;

    test('renders box information correctly', async () => {
        const mockBoxesData = {
            codeStatus: 200,
            boxes: [
                { id: 1, name: 'Boxe 1' },
                { id: 2, name: 'Boxe 2' },
            ],
        };

        mockedGetBoxes.mockResolvedValueOnce(mockBoxesData);

        render(
            <Router>
                <BoxesMain />
            </Router>
        );

        // Check if the page renders the "Create New Box" button and header text
        expect(screen.getByText(/My Boxes/i)).toBeInTheDocument();
        expect(screen.getByText(/Create New Box/i)).toBeInTheDocument();

        // Wait for the data to be fetched and the boxes to be displayed
        await waitFor(() => {
            expect(screen.getByText(/Boxe 1/i)).toBeInTheDocument();
            expect(screen.getByText(/Boxe 2/i)).toBeInTheDocument();
        });

        // Get all "View Details" links
        const viewDetailsLinks = screen.getAllByText(/View Details/i);

        // Assert that the "View Details" links are present for each box
        expect(viewDetailsLinks).toHaveLength(2); // Two "View Details" links should be present

        // Optionally check the hrefs to ensure they're correct
        expect(viewDetailsLinks[0].getAttribute('href')).toBe('/boxes/1');
        expect(viewDetailsLinks[1].getAttribute('href')).toBe('/boxes/2');
    });

    test('renders empty state when no boxes are available', async () => {
        const mockEmptyData = {
            codeStatus: 200,
            boxes: [],
        };

        mockedGetBoxes.mockResolvedValueOnce(mockEmptyData);

        render(
            <Router>
                <BoxesMain />
            </Router>
        );

        // Wait for the empty state to be rendered
        await waitFor(() => {
            expect(screen.getByText(/No boxes found/i)).toBeInTheDocument();
        });
    });

    test('renders an error message when fetching boxes fails', async () => {
        console.error = jest.fn(); // Suppress console errors during test

        mockedGetBoxes.mockRejectedValueOnce(new Error('Fetch failed'));

        render(
            <Router>
                <BoxesMain />
            </Router>
        );

        await waitFor(() => {
            expect(console.error).toHaveBeenCalledWith('Error fetching boxes:', expect.any(Error));
        });
    });
});
