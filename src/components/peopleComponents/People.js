import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from 'styled-components';
import PersonListItem from './PersonListItem';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: darkred;
`;

const Container = styled.div`
  margin: 10px auto;
  width: 70%;
  text-align: center;
`;

const SearchInput = styled.input`
  width: 90%;
  padding: 12px 20px;
  margin: 8px 0;
  border: none;
  border-bottom: 2px solid darkred;
  font-size: 20px;
  &:focus, &:hover { 
    outline:none;
  }
`;

export default function People () {
    const [people, setPeople] = useState([]);
    const [input, setInput] = useState('');


    const handleChange = e => {
      e.preventDefault();
      setInput(e.target.value);
     }

    useEffect(() => {
      axios.get('https://swapi.dev/api/people/')
        .then((res) => {
          console.log(res.data.results);
          setPeople(res.data.results);
        });
    }, [setPeople]);
  
    const toPerson = useCallback((person, index) => <PersonListItem key={person.url} name={person.name} id={index + 1} /> , []);
   
    const filtredPeople = people.filter( person => person.name.toLowerCase().match(input.toLowerCase()));


    return (
      <Container>
      <Title>This is SWAPI persons</Title>
      <SearchInput type="text" placeholder="Search..." onChange={handleChange} value={input}/>
      <div>{ filtredPeople.length ? filtredPeople.map(toPerson) : "Nothing found"  }</div>
      </Container>
    );
  }
  
