import { movies } from "./movieDummy";
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

