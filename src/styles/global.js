import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  
  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  input {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  `;

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: darkred;
`;

export const Container = styled.div`
    margin: 10px auto;
    width: 70%;
    text-align: center;
`;

export const BackBtn = styled(Link)`
  margin: 10px auto;
  padding: 10px;
  width: 15%;
  font-size: 15px;
  color: white;
  background-color: darkred;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    background-color: black;
  }
`;