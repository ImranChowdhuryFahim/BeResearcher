import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import Header from '../blog/Header';
import Button from '@material-ui/core//Button';
import Event from './Event';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '10px auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function Events(props) {
  const [isNewEvent, setisNewEvent] = useState(true);
  const [emne, setEmne] = useState(false);
  const [eventContentNew, setEventContentNew] = useState([]);
  const [eventContentOld, setEventContentOld] = useState([]);
  const classes = useStyles();
  const filterEventAndUpdateState = (allEvents) => {
    let nEventContentNew = [],
      nEventContentOld = [];
    const current = new Date().getTime();
    allEvents.forEach((el) => {
      if (new Date(el.startDate).getTime() < current) nEventContentOld.push(el);
      else nEventContentNew.push(el);
    });
    console.log(nEventContentNew, nEventContentOld);
    setEventContentOld([...nEventContentOld]);
    setEventContentNew([...nEventContentNew]);
  };

  useEffect(() => {
    fetch('https://beresearcherbd.herokuapp.com/api/event/get-all-events')
      .then((res) => res.json())
      .then((res) => {
        filterEventAndUpdateState(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <CssBaseline>
        <Container maxWidth="lg">
          <button onClick={() => setEmne(!emne)}>Click to Enter</button>
          <Header title="Events" sections={[]} />
          <Grid container direction="row" justify="center" spacing={3}>
            <Grid item>
              <Button
                variant={isNewEvent ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => setisNewEvent(true)}
              >
                Upcoming
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant={isNewEvent ? 'outlined' : 'contained'}
                color="primary"
                onClick={() => setisNewEvent(false)}
              >
                Past
              </Button>
            </Grid>
          </Grid>
          <div className={classes.root}>
            {isNewEvent
              ? eventContentNew[0]
                ? eventContentNew.map((event) => (
                    <Event key={event.body} event={event} />
                  ))
                : 'Loading'
              : ''}
            {!isNewEvent
              ? eventContentOld[0]
                ? eventContentOld.map((event) => (
                    <Event key={event.body} event={event} />
                  ))
                : 'Loading'
              : ''}
          </div>
        </Container>
      </CssBaseline>
    </React.Fragment>
  );
}
