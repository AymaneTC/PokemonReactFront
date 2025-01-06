import { describe, expect, test } from '@jest/globals';
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../src/components/Footer';

describe('Footer Component', () => {
    test('renders Footer component', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        // Test that the footer is rendered
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });

    test('renders PokemonAPI link', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        // Test that the "PokemonAPI" link is in the footer and has the correct href
        const pokemonApiLink = screen.getByText(/PokemonAPI/i);
        expect(pokemonApiLink).toBeInTheDocument();
        expect(pokemonApiLink.closest('a')).toHaveAttribute('href', '/PokemonReactFront/front/public');
    });

    test('renders Made by text with the correct GitHub link', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        // Test that the "Made by" text is in the footer
        const madeByText = screen.getByText(/© Made by/i);
        expect(madeByText).toBeInTheDocument();

        // Test that the GitHub link is correct
        const githubLink = screen.getByText(/Aymane Tchich/i);
        expect(githubLink).toBeInTheDocument();
        expect(githubLink.closest('a')).toHaveAttribute('href', 'https://github.com/AymaneTC');
    });

    test('renders "about" NavLink', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        // Test that the "about" link is in the footer
        const aboutLink = screen.getByText(/about/i);
        expect(aboutLink).toBeInTheDocument();
        expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');
    });
});
