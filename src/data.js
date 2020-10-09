import React, { Component } from "react";

export const CourseContext = React.createContext();

export class CourseProvider extends Component {
  constructor() {
    super();
    this.state = {
      CourseContent: {
        1: [
          {
            id: 1,
            unit: 1,
            title:
              "Webinar Speech: আমি কি পারব গবেষক হতে? - Can I become a researcher? - Mymensingh Eng. College",
            src: "https://youtu.be/Ra6vA6-GbiI",
            type: "lecture",
          },

          {
            id: 2,
            unit: 1,
            title:
              "লেকচার ১ঃ গবেষণা কি? কেন করব? লাভ কি? । What is research? Why to conduct research?",
            src: "https://youtu.be/J9j7tGNzA3o",
            type: "lecture",
          },
          {
            id: 3,
            unit: 1,
            title:
              "লেকচার ২ঃ গবেষণার প্রকারভেদ, গবেষণার সাধারণ পদ্ধতি । Research Types, Research Process",
            src: "https://youtu.be/sEU1rub3CDg",
            type: "lecture",
          },
          {
            id: 4,
            unit: 1,
            title:
              "লেকচার ৩.১ঃ গবেষণার টপিক সিলেকশন । Research Topic Selection",
            src: "https://youtu.be/ulmt9Ck0UAA",
            type: "lecture",
          },
          {
            id: 5,
            unit: 1,
            title:
              "লেকচার ৩.২ঃ বিষয় ভিত্তিক গবেষণাপত্র ফ্রি ডাউনলোড । Download Topic Related Articles Free",
            src: "https://youtu.be/BzG2O1h80Ys",
            type: "lecture",
          },
          {
            id: 6,
            unit: 1,
            title: "Assignment 1",
            description:
              "Final Paper Assignment Description. Paper Goals: This final paper is the capstone assignment of COM 431 since it requires you to use all that you have learned ...",
            type: "assignment",
          },
        ],
        2: [
          {
            id: 7,
            unit: 2,
            title:
              "লেকচার ৩.৩ঃ কিভাবে গবেষণাপত্র পড়ব? । How to read research paper?",
            src: "https://youtu.be/3FJ0RTBw4tM",
            type: "lecture",
          },
          {
            id: 8,
            unit: 2,
            title:
              "লেকচার ৪.১ঃ ভালো গবেষণাপত্র/জার্নাল খুঁজে পাওয়ার উপায় । How to find out good quality papers/journals",
            src: "https://youtu.be/QAUfuu_1Hhs",
            type: "lecture",
          },
          {
            id: 9,
            unit: 2,
            title:
              "লেকচার ৪.২ঃ ভুয়া জার্নাল/পাবলিশার চেনার উপায় । How to avoid fake/predatory journals/publishers?",
            src: "https://youtu.be/XRgpEPnZwPM",
            type: "lecture",
          },
          {
            id: 10,
            unit: 2,
            title:
              "লেকচার ৪.৩ঃ লিটারেচার রিভিউ লেখার নিয়ম উদাহরণসহ । How to write literature review with examples?",
            src: "https://youtu.be/KL8AghDVA_Y",
            type: "lecture",
          },
          {
            id: 11,
            unit: 2,
            title:
              "লেকচার ৫.১ঃ রিসার্চ/লিটারেচার গ্যাপ বের করার উপায় । How to find out research/literature gaps?",
            src: "https://youtu.be/Mcz64BZEuv0",
            type: "lecture",
          },
          {
            id: 12,
            unit: 2,
            title:
              "লেকচার ৫.২ঃ রিসার্চ কোয়েশ্চেন নির্ধারণ । Determination of research questions",
            src: "https://youtu.be/e6-4kFmOVAk",
            type: "lecture",
          },
          {
            id: 13,
            unit: 2,
            title:
              "লেকচার ৫.৩ঃ রিসার্চ হাইপোথেসিস সেট করা । Setting Research Hypothesis",
            src: "https://youtu.be/J6UXlT8IN6Y",
            type: "lecture",
          },
        ],

        3: [
          {
            id: 14,
            unit: 3,
            title:
              "লেকচার ৬.১ঃ বিভিন্ন ধরণের রিসার্চ আর্টিকেল । Different types of research articles",
            src: "https://youtu.be/Qrz00d_JFiY",
            type: "lecture",
          },
          {
            id: 15,
            unit: 3,
            title:
              "লেকচার ৬.২ঃ রিসার্চ আর্টিকেল/প্রোপোজাল-এর সাধারণ গঠণ । Structure of Research Article/Proposal",
            src: "https://youtu.be/65N34eV6GFo",
            type: "lecture",
          },
          {
            id: 16,
            unit: 3,
            title:
              "লেকচার ৭.১ঃ রিসার্চ মেথডোলজি-এর বেসিক ধারণা । Research Methodology Basics",
            src: "https://youtu.be/UcDMFlnYHmA",
            type: "lecture",
          },
          {
            id: 17,
            unit: 3,
            title:
              "লেকচার ৭.২.১ঃ রিসার্চ মেথডোলজি লিখার ধাপসমূহ (১ম অংশ) । Steps in writing research methodology",
            src: "https://youtu.be/2As0JbLEWpI",
            type: "lecture",
          },
          {
            id: 18,
            unit: 3,
            title:
              "লেকচার ৭.২.২ঃ রিসার্চ মেথডোলজি লিখার ধাপসমূহ (২য় অংশ) । Steps in writing research methodology",
            src: "https://youtu.be/90eLJ68SLus",
            type: "lecture",
          },
        ],
      },
      currentuserdetails: {
        name: "Imran Chowdhury",
        completed: "10%",
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

  render() {
    return (
      <CourseContext.Provider
        value={{
          CourseContent: this.state.CourseContent,
          CurrentUserDetails: this.state.currentuserdetails,
          CurrentContentDetails: this.state.CurrentContentDetails,
          updateAssignment: this.updateAssignment,
          UpdateCurrentContentDetails: (e) =>
            this.UpdateCurrentContentDetails(e),
          //   currentactive: this.state.CurrentActive,
          //   updateCurrentActive: (e) => this.updateCurrentActive(e),
        }}
      >
        {this.props.children}
      </CourseContext.Provider>
    );
  }
}
