import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PersonListItem from './PersonListItem'

export default function People () {
    const [people, setPeople] = useState([]);
  
    useEffect(() => {
      axios.get('https://swapi.dev/api/people/')
        .then((res) => {
          console.log(res.data.results);
          setPeople(res.data.results);
        });
    }, [setPeople]);
  
    const toPerson = useCallback((person, index) => <PersonListItem name={person.name} id={index + 1} />);
  
    return (
      <div>{ people.map(toPerson) }</div>
    );
  }
  
