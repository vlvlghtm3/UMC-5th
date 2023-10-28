function Movie(props) {
    const PosterUrl = `https://image.tmdb.org/t/p/w1280/${props.item.poster_path}`;
    return (
      <div className="Poster">
        <div className="modalWrap">
          <div className="modal-form" >
            <div className="modal-title">{props.item.title}</div>
            <div className="overview">{props.item.overview}</div>
          </div>
        </div>
        <img className="img" src={PosterUrl} alt="poster"></img>
        <div className="Text">
          <div className="title">{props.item.title}</div>
          <div className="average">{props.item.vote_average}</div>
        </div>
      </div>
    );
  }
  
  export default Movie;
  