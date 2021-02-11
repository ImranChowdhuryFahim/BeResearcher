import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../blog/Header';
import NewsProvider from './NewsProvider';
import SingleNewsPage from './SingleNewsPage';
import Footer2 from '../new-landing-page/Footer/Footer';

import Main from './Main';
const sections = [
  { title: 'Research', url: '#' },
  { title: 'Research Methodology', url: '#' },
  { title: 'Research Basic', url: '#' },
  { title: 'Paper Writing', url: '#' },
  { title: 'Paper Writing Guidelines', url: '#' },
  { title: 'Higher Study Guideline', url: '#' },
  { title: 'Research Talks', url: '#' },
  { title: 'Research Webinar', url: '#' },
  { title: 'Idea Series', url: '#' },
  { title: 'Miscellaneous', url: '#' },
];

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function News(props) {
  const classes = useStyles();
  const [content, setcontent] = useState([]);
  useEffect(() => {
    // Promise.all([fetch(post1), fetch(post2), fetch(post3)]).then((resp) => {
    //   Promise.all([
    //     resp[0].text(),
    //     resp[1].text(),
    //     resp[2].text(),
    //   ]).then((resp) => Setcontent([resp[0], resp[1], resp[2]]));
    // });

    fetch('https://beresearcherbd.herokuapp.com/api/news/get-all-news')
      .then((res) => res.json())
      .then((res) => {
        console.log(res, '**********');
        setcontent(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ minHeight: '92vh' }}>
        <Header title="News" sections={sections} />
        <Router>
          <Route path="/news/:id" component={SingleNewsPage}></Route>
          <Route exact path="/news">
            <main>
              <Grid container spacing={5} className={classes.mainGrid}>
                {content[0] ? (
                  <Main title="All news" posts={content} />
                ) : (
                  'loading'
                )}
              </Grid>
            </main>
          </Route>
        </Router>
      </Container>
      {/* <Footer
      title="Footer"
      description="Something here to give the footer a purpose!"
    /> */}
      <Footer2 />
    </React.Fragment>
  );
}
