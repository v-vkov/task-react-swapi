import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";



export default function OneFilm (props) {
    const [oneFilm, setOneFilm] = useState();
    let { filmId } = useParams();
  
    useEffect(() => {
      axios.get(`https://swapi.dev/api/films/${filmId}/`)
        .then((res) => {
          console.log(res);
          setOneFilm(res.data);
        });
    }, [setOneFilm]);
  
    if (!oneFilm) {
      return <div>Loading...</div>;
    }
  
  
    return (
      <div>
        <Link to="/">Back</Link>
        <div>name: { oneFilm.title }</div>
        <div>gender: { oneFilm.director }</div>
        <div>height: { oneFilm.release_date }</div>
        <div>hair: { oneFilm.opening_crawl }</div>
      </div>
    );
  }