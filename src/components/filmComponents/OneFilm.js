import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { BackBtn } from './../../styles/global'

const Wrapper = styled.div`
  padding: 10px;
  margin: 20px auto;
  border: 2px solid black;
`;

export default function OneFilm () {
    const [oneFilm, setOneFilm] = useState();
    let { filmId, personId } = useParams();
  
    useEffect(() => {
      axios.get(`https://swapi.dev/api/films/${filmId}/`)
        .then((res) => {
          setOneFilm(res.data);
        });
    }, [setOneFilm, filmId]);
  
    if (!oneFilm) {
      return <div>Loading...</div>;
    }
  
  
    return (
      <div>
        <BackBtn to={`/${personId}`} >Back to the all films</BackBtn>
        <Wrapper>
        <div><b>Title:</b> { oneFilm.title }</div>
        <div><b>Director:</b> { oneFilm.director }</div>
        <div><b>Release date:</b> { oneFilm.release_date }</div>
        <div><b>Opening crawl:</b> { oneFilm.opening_crawl }</div>
        </Wrapper>
      </div>
    );
  }