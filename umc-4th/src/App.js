import { movies } from "./movieDummy";
import MovieStyle from "./Components/Movie/Movie.style";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {movies.results.map((item) => {
          return <MovieStyle item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;

