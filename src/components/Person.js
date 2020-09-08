import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Films from './Films';
import OneFilm from './OneFilm';


export default function Person (props) {
    const [person, setPerson] = useState();
    let { personId } = useParams();
  
    useEffect(() => {
      axios.get(`https://swapi.dev/api/people/${personId}/`)
        .then((res) => {
          console.log(res);
          setPerson(res.data);
        });
    }, [setPerson]);
  
    if (!person) {
      return <div>Loading...</div>;
    }
  
  
    return (
      <div>
        <Link to="/">Back</Link>
        <div>name: { person.name }</div>
        <div>gender: { person.gender }</div>
        <div>height: { person.height }</div>
        <div>hair: { person.hair_color }</div>
        
        <Router>
          <Switch>
            <Route path="/:personId" exact>
                <Films />
            </Route>
            <Route path="/:personId/:filmId">
                <OneFilm />
            </Route>
          </Switch>
        </Router>

      </div>
    );
  }