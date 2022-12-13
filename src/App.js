import React from 'react';
import Stack from './stack/stack';
import { Provider } from 'react-redux'
import store from './redux/store.js';

function App() {
  return (
    <Provider store={store}>
      <Stack/>
    </Provider>
  );
}

export default App;
