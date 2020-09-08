import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import FilmListItem from './FilmListItem';

export default function Films () {
    const [films, setFilms] = useState([]);

  
    useEffect(() => {
      axios.get('https://swapi.dev/api/films/')
        .then((res) => {
          console.log(res.data.results);
          setFilms(res.data.results);
        });
    }, [setFilms]);
  
    const toFilm = useCallback((film, index) => <FilmListItem title={film.title} id={index + 1} />);
  
    return (
      <div>{ films.map(toFilm) }</div>
    );
  }
  