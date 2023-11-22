import React from 'react';
import { movies } from "../movieDummy";
import MovieStyle from "../Components/MovieStyle";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const App = styled.div`
  margin-left: 5%;
  margin-right: 5%;
`;
const AppContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default function Movie() {
  const navigate = useNavigate();

  const ClickPoster = (item) => {
    navigate(`/movie/${item.title}`, { state: { movieData: item }});
  };

  return (
    <App>
      <AppContainer>
        {movies.results.map((item) => {
          return (
            <div
              key={item.title}
              onClick={() => ClickPoster(item)}
            >
              <MovieStyle item={item} />
            </div>
          );
        })}
      </AppContainer>
    </App>
  );
}
