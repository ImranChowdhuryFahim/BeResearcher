import React, { Component } from "react";


export const CourseContext = React.createContext();

export class CourseProvider extends Component {
  constructor() {
    super();
    this.state = {
        CourseContent: null,
        currentuserdetails: {
            name : 'Imran Chowdhury',
            completed : '10%'
        },
        CurrentContentDetails: {
            id : 1,
            unit :1,
            title : 'Webinar Speech: আমি কি পারব গবেষক হতে? - Can I become a researcher? - Mymensingh Eng. College',
            src : 'https://youtu.be/Ra6vA6-GbiI',
            type: 'lecture'
        },
        CourseTitle: 'Research Methodology'
    };
  }


  updateCurrentActive(e) {
    this.setState({ CurrentActive: e });
  }

  UpdateCurrentContentDetails(e)
  {
      this.setState({CurrentContentDetails: e});
    //   console.log(this.state.CurrentContentDetails)
  }

  UpdateCourseContent(e)
  {
      this.setState({CourseContent: e});
  }

  render() {
    return (
      <CourseContext.Provider
        value={{
          CourseContent: this.state.CourseContent,
          CurrentUserDetails: this.state.currentuserdetails,
          CurrentContentDetails: this.state.CurrentContentDetails,
          CourseTitle: this.state.CourseTitle,
          UpdateCurrentContentDetails : (e) => this.UpdateCurrentContentDetails(e),
          UpdateCourseContent: (e) => this.UpdateCourseContent(e),
        //   currentactive: this.state.CurrentActive,
        //   updateCurrentActive: (e) => this.updateCurrentActive(e),
        }}
      >
        {this.props.children}
      </CourseContext.Provider>
    );
  }
}
