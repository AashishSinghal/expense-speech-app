import { Grid } from "@material-ui/core";
import React from "react";
import "./App.css";
import Details from "./Components/Details";
import Main from "./Components/Main/Main";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={3}>
          <Details title='Income' />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Main/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Details title='Expense'/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
