import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { getCharacters, postCharacter } from '../../services/charactersApi';
import userEvent from '@testing-library/user-event';

jest.mock('../../services/charactersApi.js');

describe('App component', () => {
  beforeAll(() => {
    getCharacters.mockResolvedValue([
      {
        id: '1',
        name: 'Steve',
        image: 'www.image.com',
        species: 'human',
        actor: 'Steve Marshall'
      },
      {
        id: '2',
        name: 'Jane',
        image: 'www.images.com',
        species: 'human',
        actor: 'Jane Marshall'
      }

    ]);
  });

  it('renders a list of characters', () => {
    render(<App />);

    const characterList = screen.getByTestId('characters');

    return waitFor(() => {
      expect(characterList.children).toHaveLength(2);
    });
  });

  it('creates a new character with a form submit', () => {
    postCharacter.mockResolvedValue({
      id: '3',
      name: 'Sleezy',
      image: 'www.hiss.com',
      species: 'Sleestak',
      actor: 'Bill Tedly'

    });

    render(<App />);

    const characterList = screen.getByTestId('characters');

    const characterNameInput = screen.getByLabelText('Name:');
    const characterImage = screen.getByLabelText('Image URL:');
    const characterSpecies = screen.getByLabelText('Species:');
    const characterActor = screen.getByLabelText('Actor:');
    const submitButton = screen.getByText('ADD CHARACTER')

    userEvent.type(characterNameInput, 'Sleezy');
    userEvent.type(characterImage, 'www.hiss.com');
    userEvent.type(characterSpecies, 'Sleestak');
    userEvent.type(characterActor, 'Bill Tedly');
    

    userEvent.click(submitButton);

    return waitFor(() => {
      expect(characterList.children).toHaveLength(2);
    });



  });
});
