import React from 'react';
import AddCharacter from './character/addCharacter';
import store from '../../store.js';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
        <AddCharacter />
    </Provider>
  );
}
