import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import FilmListItem from './FilmListItem';

export default function Films ({personId, personFilmList}) {
    const [films, setFilms] = useState([]);
  
    useEffect(() => {
      axios.get('https://swapi.dev/api/films/')
        .then((res) => {
        const allFilms = res.data.results;
        const personFilms = allFilms.filter( film => personFilmList.includes(film.url));
        setFilms(personFilms);
        });
    }, [setFilms, personFilmList, personId]);
  
    
    const toFilm = useCallback((film, index) => <FilmListItem key={film.url} personId={personId} title={film.title} filmId={index + 1} />, [personId]);
  
    return (
      <div>{ films.map(toFilm) }</div>
    );
  }
  