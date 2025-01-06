import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header';
import React from 'react';
import { describe, it, expect, jest } from '@jest/globals';

describe('Header component - Logged Out', () => {
  it('renders Header component when user is not logged in', () => {
    // Mocking AuthRoute to simulate logged-out state
    jest.spyOn(require('../src/Routes/AuthRoute.tsx'), 'default').mockReturnValue(false);

    render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
    );

    expect(screen.getByText("Se connecter")).toBeInTheDocument();
    expect(screen.getByText("S’inscrire")).toBeInTheDocument();
    expect(screen.queryByText('Mes boîtes')).not.toBeInTheDocument();
    expect(screen.queryByText('Déconnexion')).not.toBeInTheDocument();
  });
});
