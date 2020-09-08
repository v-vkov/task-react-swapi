import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import styled from 'styled-components';
import Films from '../filmComponents/Films';
import OneFilm from '../filmComponents/OneFilm';
import { Title, Container, BackBtn } from './../../styles/global';

const PersonInfo = styled.div`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  color: black;
`;


export default function Person () {
    const [person, setPerson] = useState();
    const { personId } = useParams();
  
    useEffect(() => {
      axios.get(`https://swapi.dev/api/people/${personId}/`)
        .then((res) => {
          console.log(res);
          setPerson(res.data);
        });
    }, [setPerson, personId]);
  
    if (!person) {
      return <Title>Loading...</Title>;
    }
  
  
    return (
      <Container>
        <BackBtn to="/">Back</BackBtn>
        <PersonInfo>
        <Title><b>Name:</b> { person.name }</Title>
        <div><b>Gender:</b> { person.gender }</div>
        <div><b>Height:</b> { person.height }</div>
        <div><b>Hair:</b> { person.hair_color }</div>
        </PersonInfo>

        <Title>You can meet {person.name} in this films:</Title>
        
        <Router>
          <Switch>
            <Route path="/:personId" exact>
                <Films personId={personId} personFilmList={person.films} />
            </Route>
            <Route path="/:personId/:filmId">
                <OneFilm personId={personId}/>
            </Route>
          </Switch>
        </Router>

      </Container>
    );
  }