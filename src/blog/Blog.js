import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import PostsProvider from './PostsProvider';
import SinglePostPage from './SinglePostPage';

import Footer2 from '../new-landing-page/Footer/Footer';
import Markdown from 'markdown-to-jsx';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

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

const mainFeaturedPostDummy = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();
  const [content, setcontent] = useState([]);
  const [mainFeaturedPost, setMainFeaturedPost] = useState(
    mainFeaturedPostDummy
  );
  useEffect(() => {
    // Promise.all([fetch(post1), fetch(post2), fetch(post3)]).then((resp) => {
    //   Promise.all([
    //     resp[0].text(),
    //     resp[1].text(),
    //     resp[2].text(),
    //   ]).then((resp) => Setcontent([resp[0], resp[1], resp[2]]));
    // });

    fetch('https://beresearcherbd.herokuapp.com/api/blog/get-all-blog-posts')
      .then((res) => res.json())
      .then((res) => {
        setcontent(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (content.length > 0)
      setMainFeaturedPost((prevState) => {
        const newState = Object.assign(prevState, {
          title: content[0].title,
          description: content[0].body,
        });
        const newStateToBeSent = {};

        for (let key in newState) {
          newStateToBeSent[key] = newState[key];
        }

        return newStateToBeSent;
      });
  }, [content]);

  return (
    <React.Fragment>
      <CssBaseline />
      <PostsProvider>
        <Container maxWidth="lg" style={{ minHeight: '92vh' }}>
          <Header title="Blog" sections={sections} />
          <Router>
            <Route path="/blog/post/:id" component={SinglePostPage}></Route>
            <Route exact path="/blog">
              <main>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Grid container spacing={4}>
                  {featuredPosts.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                  ))}
                </Grid>
                <Grid container spacing={5} className={classes.mainGrid}>
                  <Main title="All Posts" posts={content} />
                  {/* {posts[0] ? (
                    <Markdown>
                      {`#### April 1, 2020 by [Olivier](/) ${posts[0].body}`}
                    </Markdown>
                  ) : (
                    ''
                  )} */}
                  <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                    social={sidebar.social}
                  />
                </Grid>
              </main>
            </Route>
          </Router>
        </Container>
      </PostsProvider>
      {/* <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      /> */}
      <Footer2 />
    </React.Fragment>
  );
}
