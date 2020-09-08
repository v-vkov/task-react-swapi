import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import People from './components/peopleComponents/People';
import Person from './components/peopleComponents/Person';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';


const Button = styled.button`
  background-color: darkred;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
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
    <Button onClick = {toggleTheme}>Toggle theme</Button>
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
