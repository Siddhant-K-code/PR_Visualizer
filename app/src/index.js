import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { Grid, Container } from "@material-ui/core";
ReactDOM.render(
  <React.StrictMode>
     <Grid container spacing={4}>
        <br />
        <Grid item container xs={12} sm={12} md={12} lg={12}>
          {" "}
          Heading
        </Grid>

        <Grid item container xs={12} sm={12} md={12} lg={12}>
          Navbar
        </Grid></Grid><br/><br/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();