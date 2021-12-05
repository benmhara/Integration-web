import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search_title: "", movies: [] };

    this.url = "https://image.tmdb.org/t/p/w500/";
  }

  getMovie = (query) => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=" +
        query +
        "&page=1&include_adult=false"
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({ movies: result.results });
      });
  };

  MovieContainer = (movie) => {
    return (
      <>
        <img src={this.url + movie.backdrop_path}></img>
        <h1>{movie.original_title}</h1>
        <h2>{movie.release_date}</h2>
        <h3>{movie.vote_average}</h3>
        <p>{movie.overview}</p>
      </>
    );
  };

  MoviesDashboard = () => {
    if (this.state.movies.length === 0) {
      return <h1>No Movies found !!</h1>;
    } else {
      return (
        <>
          {this.state.movies.map((movie, index) => {
            return (
              <div className="movie-container" key={index}>
                {this.MovieContainer(movie)}
              </div>
            );
          })}
        </>
      );
    }
  };

  render() {
    return (
      <div className="movie">
        <h1>Movie Website</h1>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ search_title: e.target.value });
          }}
        ></input>
        <button
          onClick={() => {
            this.getMovie(this.state.search_title);
          }}
        >
          Search
        </button>

        <div className="movies-container">
          <this.MoviesDashboard />
        </div>
      </div>
    );
  }
}
