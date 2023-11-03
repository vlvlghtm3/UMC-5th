import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Movie from './page/Movie';
import TV from './page/TV';
import Celebrity from './page/Celebrity';
import Home from './page/Home'; 
import LoginControl from './page/LoginControl';
import MovieDetail from './page/MovieDetail';
import PageNotFound from './page/NotFound';
function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loginbtn" element={<LoginControl />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



