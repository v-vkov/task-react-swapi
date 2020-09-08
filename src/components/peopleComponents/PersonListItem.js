import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: darkred;
    color: white;
  }
`;


export default function PersonListItem ({name, id}) {
    return (
      <Link to={`/${id}`} key={id}>
        <Wrapper>{name}</Wrapper>
      </Link>
    );
  }