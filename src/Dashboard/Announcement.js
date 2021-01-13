import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { CourseContext as Context } from '../data';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useContext } from 'react';

import axios from 'axios';
import Auth from '../Auth';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Announcement() {
  const [redirect, setRedirect] = useState(false);
  const context = useContext(Context);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  // {context.CurrentUserDetails.receivedAnnouncementIds[0].author}
  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem('login'));
    if (localData && localData.login) {
      if (localData.adminauth) {
        Auth.adminAuthenticate();
      }

      axios({
        method: 'GET',
        url: `https://beresearcherbd.herokuapp.com/api/student/getdetails`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          auth: localData.token,
        },
      }).then((res) => {
        if (res.data.length !== 0) {
          context.UpdateCurrentUserDetails({
            id: res.data._id,
            name: res.data.firstName + ' ' + res.data.lastName,
            email: res.data.email,
            receivedAnnouncementIds: res.data.recievedAnnouncementIds,
          });
        }
      });
    } else {
      setRedirect(true);
    }
  }, []);
  if (redirect) {
    return <Redirect to="/login"></Redirect>;
  }
  return (
    <div className="announcement-card-container">
      {context.CurrentUserDetails.receivedAnnouncementIds &&
        context.CurrentUserDetails.receivedAnnouncementIds.map(
          ({ title, author, message, createdAt }) => (
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {title}
                </Typography>
                <Typography variant="h5" component="h2">
                  {bull} {author}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {createdAt}
                </Typography>
                <Typography variant="body2" component="p">
                  {'   '}
                  {message}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          )
        )}
    </div>
  );
}
