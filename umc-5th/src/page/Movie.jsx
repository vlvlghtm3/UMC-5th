import React from 'react'
import { movies } from "../movieDummy";
import MovieStyle from "../Components/MovieStyle";
import styled from "styled-components";
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
  return (
    <App>
      <AppContainer>
        {movies.results.map((item) => {
          return <MovieStyle item={item} />;
        })}
      </AppContainer>
    </App>
  )
}
