/*import { movies } from "./movieDummy";
import Movie from "./Components/Movie";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {movies.results.map((item) => {
          return <Movie item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
*/
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Movie from './page/Movie';
import TV from './page/TV';
import Celebrity from './page/Celebrity';
import Home from './page/Home'; 
import LoginControl from './page/LoginControl';

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/movie" element={<Movie />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/" element={<Home />} />
          <Route path="/loginbtn" element={<LoginControl />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



