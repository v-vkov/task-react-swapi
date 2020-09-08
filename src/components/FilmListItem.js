import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;


export default function FilmListItem ({title, id}) {
    return (
      <Link to={`/${id}`} key={id}>
        <Wrapper>{title}</Wrapper>
      </Link>
    );
  }