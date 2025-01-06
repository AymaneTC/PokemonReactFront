import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Layout from '../src/components/Layout';
import { describe, it } from '@jest/globals'
import React from "react";

describe('Layout component', () => {
  it('renders Layout with Header, Outlet, and Footer', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
  });
});