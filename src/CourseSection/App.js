import React, { Component } from 'react';
import Header from './Header/Header';
import Sidebar from './SideBar/Sidebar';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import { CourseContext } from '../data';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/core';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
      Ismobile: false,
      myref: React.createRef(),
      redirect: false,
    };
  }
  close() {
    this.setState({ open: false });
    // console.log(this.state.open)
  }
  open() {
    this.setState({ open: true });
    // const node = ReactDOM.findDOMNode(this.state.myref.current);
    // node.scrollTop = node.scrollTop + this.props.match.params.ContentId * 20;
    // console.log(this.state.open)
  }
  toggole() {
    this.setState({ open: !this.state.open });
    // console.log(this.state.open)
  }

  updateDimensions = () => {
    if (window.innerWidth <= 800) {
      this.close();
      this.setState({ Ismobile: true });
    } else {
      this.open();
      this.setState({ Ismobile: false });
    }
  };
  componentDidMount() {
    let localData = JSON.parse(localStorage.getItem('login'));
    if (localData && localData.login) {
      axios
        .get(
          `https://beresearcherbd.herokuapp.com/api/course/getcoursedata/${'Research Methodology'}`
        )
        .then((res) => {
          this.context.UpdateTotalItem(res.data.totalItem);
        });
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
          this.context.UpdateCurrentUserDetails({
            id: res.data._id,
            name: res.data.firstName + ' ' + res.data.lastName,
            email: res.data.email,
          });
          this.context.UpdatecurrentCourseProgress({
            _id: res.data.enrolledCourses[0]._id,
            title: res.data.enrolledCourses[0].title,
            completedItem: res.data.enrolledCourses[0].completedItem,
          });
          this.context.UpdateCurrentContentDetails(
            res.data.enrolledCourses[0].currentContentDetails
          );
        }
      });
      axios
        .get(
          `https://beresearcherbd.herokuapp.com/api/course/getcoursedata/${'Research Methodology'}`
        )
        .then((res) => {
          // console.log(res.data)
          setTimeout(() => {
            this.context.UpdateCourseContent(res.data.courseContent);
          }, 200);
        });
    } else {
      this.setState({ redirect: true });
    }
    if (window.innerWidth <= 800) {
      this.close();
      this.setState({ Ismobile: true });
    } else {
      this.open();
      this.setState({ Ismobile: false });
    }
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  render() {
    const loaderCss = css`
      height: 100vh;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    if (this.state.redirect) {
      return <Redirect to="/login"></Redirect>;
    }
    return (
      <div className={'coursevideosection'}>
        {this.context.CourseContent !== null &&
        this.context.CurrentUserDetails !== null &&
        this.context.currentCourseProgress !== null &&
        this.context.totalItem !== null &&
        this.context.CurrentContentDetails !== null ? (
          <div className="CourseSection">
            <Header key={0} toggole={this.toggole.bind(this)}></Header>
            <Sidebar
              key={1}
              Isopen={this.state.open}
              id={this.props.match.params.ContentId}
              open={this.open.bind(this)}
              Ismobile={this.state.Ismobile}
              rf={this.state.myref}
              close={this.close.bind(this)}
            ></Sidebar>
            <VideoPlayer
              key={2}
              Isopen={this.state.open}
              rf={this.state.myref}
              id={this.props.match.params.ContentId}
            ></VideoPlayer>
          </div>
        ) : (
          <div>
            <BeatLoader
              css={loaderCss}
              loading
              size={'30'}
              color={'blue'}
            ></BeatLoader>
          </div>
        )}
      </div>
    );
  }
}
App.contextType = CourseContext;
export default App;
