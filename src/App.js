import { Grid } from "@material-ui/core";
import {
  ErrorPanel,
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import {
  SpeechState,
  useSpeechContext,
} from "@speechly/react-client";
import React, { useEffect, useRef } from "react";
import "./App.css";
import Details from "./Components/Details";
import Main from "./Components/Main/Main";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();

  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <>
      <div className="App">
        <Grid
          className={classes.grid}
          container
          spacing={0}
          alignItems="center"
          justify="center" 
          style={{ height: "100vh" }}
        >
          <Grid item xs={12} sm={3} className={classes.mobile}>
            <Details title="Income" />
          </Grid>
          <Grid ref={main} item xs={12} sm={4} className={classes.main}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.desktop}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.last}>
            <Details title="Expense" />
          </Grid>
        </Grid>
      </div>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </>
  );
};

export default App;
