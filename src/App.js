import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import SearchBar from './components/SearchBar'
import HomeContainer from './components/HomeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <SearchBar></SearchBar>
       <HomeContainer></HomeContainer>
      </div>
    </Provider>
  );
}

export default App;
