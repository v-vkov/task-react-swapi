import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import People from './components/peopleComponents/People';
import Person from './components/peopleComponents/Person';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';


const ToggleBtn = styled.button`
  background-color: darkred;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;

export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles/>
    <ToggleBtn onClick = {toggleTheme}>Toggle theme</ToggleBtn>
    <Router>
      <Switch>
        <Route path="/" exact>
          <People />
        </Route>
        <Route path="/:personId">
          <Person />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}
