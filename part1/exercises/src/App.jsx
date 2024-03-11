import logo from './logo.svg';
import React from 'react';
import './App.css';
import MovieList from './components/MovieList.jsx';
import ChoresList from './components/ChoresList.jsx';
import BookList from './components/BookList.jsx';

function App() {
  return (
    <div className="App">
      <ChoresList /> {/* "Odd one out" component */}
      <div className="similarComponents"> {/* Wrapper for similar components */}
        <MovieList />
        <BookList />
        <HobbyLinks />
      </div>
    </div>
  );
}

export default App;
