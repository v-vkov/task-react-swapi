import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: darkred;
    color: white;
  }
`;


export default function FilmListItem ({ personId, title, filmId }) {
    return (
      <Link to={`/${personId}/${filmId}`} key={filmId}>
        <Wrapper>{title}</Wrapper>
      </Link>
    );
  }