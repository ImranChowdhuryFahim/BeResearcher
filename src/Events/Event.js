import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';

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

export default function Event({ event }) {
  const [readMore, setReadMore] = useState(false);

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img
              className={classes.img}
              alt="Event"
              src="https://image.shutterstock.com/image-vector/events-colorful-letters-banner-260nw-1178766832.jpg"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {event.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {new Intl.DateTimeFormat('en-US').format(
                  new Date(event.startDate)
                )}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {readMore ? event.body : event.body.substring(0, 150)}
              </Typography>
            </Grid>
            <Grid item onClick={() => setReadMore(!readMore)}>
              <Typography variant="body2" style={{ cursor: 'pointer' }}>
                See{' '}
                {readMore ? (
                  <>
                    Less <FontAwesomeIcon icon={faAngleDoubleUp} />{' '}
                  </>
                ) : (
                  <>
                    More <FontAwesomeIcon icon={faAngleDoubleDown} />
                  </>
                )}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              {event.startTime} - {event.endTime}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
