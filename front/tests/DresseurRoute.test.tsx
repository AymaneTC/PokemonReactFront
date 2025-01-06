import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {describe, test, expect} from '@jest/globals'
import { useContext } from 'react';
import DresseurRoute from '../src/Routes/DresseurRoute';


export const defaultTrainerData = {
    accessToken: '',
    trainerId: 0,
  }

export const TrainerContextProvider = ({ children }: { children: ReactNode }) => {
    return (
      <DresseurRoute.Provider value={{ trainerData: defaultTrainerData, setTrainerData: () => undefined }}>
        {children}
      </DresseurRoute.Provider>
    );
};

describe('TrainerContextProvider', () => {
  test('Sets default values for DresseurRoute', () => {
    render(
      <TrainerContextProvider>
        <TestComponent />
      </TrainerContextProvider>
    );

    // Access the DresseurRoute values using the TestComponent
    const trainerDataElement = screen.getByTestId('trainerData');
    
    // Assert that the default values are set
    expect(trainerDataElement.textContent).toContain('0'); // TrainerId
    expect(trainerDataElement.textContent).toContain(''); // AccessToken
  });
});

const TestComponent = () => {
  const { trainerData } = useContext(DresseurRoute);

  return (
    <div data-testid="trainerData">
      {trainerData.trainerId} - {trainerData.accessToken}
    </div>
  );
};