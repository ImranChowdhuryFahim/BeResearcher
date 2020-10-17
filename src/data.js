import React, { Component } from "react";

export const CourseContext = React.createContext();

export class CourseProvider extends Component {
  constructor() {
    super();
    this.state = {
      CourseContent: null,
      currentuserdetails: {
        name: "Imran Chowdhury",
        completed: "10",
        id: "",
      },
      currentCourseProgress: {
        id: "5f82fcb88c7efc487acf1143",
        title: "Research Methodology",
        completed: "10",
      },
      CurrentContentDetails: {
        id: 1,
        unit: 1,
        title:
          "Webinar Speech: আমি কি পারব গবেষক হতে? - Can I become a researcher? - Mymensingh Eng. College",
        src: "https://youtu.be/Ra6vA6-GbiI",
        type: "lecture",
      },
    };
    this.updateAssignment = this.updateAssignment.bind(this);
  }

  updateCurrentActive(e) {
    this.setState({ CurrentActive: e });
  }

  UpdateCurrentContentDetails(e) {
    this.setState({ CurrentContentDetails: e });
    console.log(this.state.CurrentContentDetails);
  }

  updateAssignment(unit) {
    console.log(this.state.CourseContent[unit]);
    this.setState({ CourseContent: "kicchu na" }, () =>
      console.log(this.state.CourseContent)
    );
  }

  UpdateCourseContent(e) {
    this.setState({ CourseContent: e });
  }

  UpdatecurrentCourseProgress(e)
  {
    this.setState({ currentCourseProgress: e});
  }

  render() {
    return (
      <CourseContext.Provider
        value={{
          CourseContent: this.state.CourseContent,
          CurrentUserDetails: this.state.currentuserdetails,
          CurrentContentDetails: this.state.CurrentContentDetails,
          CourseTitle: this.state.CourseTitle,
          currentCourseProgress: this.state.currentCourseProgress,
          UpdatecurrentCourseProgress: (e)=> this.UpdatecurrentCourseProgress(e),
          updateAssignment: this.updateAssignment,
          UpdateCurrentContentDetails: (e) =>
            this.UpdateCurrentContentDetails(e),
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
