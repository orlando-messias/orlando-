import React from 'react';
import './App.css';
import Form from './components/Form';
import Result from './components/Result';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Form />
        <Result />
      </Provider>
    </div>
  );
}

export default App;
