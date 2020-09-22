import React, { Component } from "react";
import Unit from "./CourseSection/SideBar/Unit/Unit";

export const CourseContext = React.createContext();

export class CourseProvider extends Component {
  constructor() {
    super();
    this.state = {
        CourseContent: {

         1 : [
            {
                id : 1,
                title : 'Webinar Speech: আমি কি পারব গবেষক হতে? - Can I become a researcher? - Mymensingh Eng. College',
                src : 'https://youtu.be/Ra6vA6-GbiI'
            },
  
            {
                id : 2,
                title : 'লেকচার ১ঃ গবেষণা কি? কেন করব? লাভ কি? । What is research? Why to conduct research?',
                src : 'https://youtu.be/J9j7tGNzA3o'
            }
            ,
            {
                id : 3,
                title: 'লেকচার ২ঃ গবেষণার প্রকারভেদ, গবেষণার সাধারণ পদ্ধতি । Research Types, Research Process',
                src : 'https://youtu.be/sEU1rub3CDg'
            }
            ,
            {
                id : 4,
                title : 'লেকচার ৩.১ঃ গবেষণার টপিক সিলেকশন । Research Topic Selection',
                src : 'https://youtu.be/ulmt9Ck0UAA'
            }
            ,
            {
                id: 5,
                title : 'লেকচার ৩.২ঃ বিষয় ভিত্তিক গবেষণাপত্র ফ্রি ডাউনলোড । Download Topic Related Articles Free',
                src : 'https://youtu.be/BzG2O1h80Ys'
            }
         ]
        ,

        2 : [
            {
                id : 6,
                title : 'লেকচার ৩.৩ঃ কিভাবে গবেষণাপত্র পড়ব? । How to read research paper?',
                src : 'https://youtu.be/3FJ0RTBw4tM'
            }
            ,
            {
                id: 7,
                title : 'লেকচার ৪.১ঃ ভালো গবেষণাপত্র/জার্নাল খুঁজে পাওয়ার উপায় । How to find out good quality papers/journals',
                src : 'https://youtu.be/QAUfuu_1Hhs'
            }
            ,
            {
                id : 8,
                title : 'লেকচার ৪.২ঃ ভুয়া জার্নাল/পাবলিশার চেনার উপায় । How to avoid fake/predatory journals/publishers?',
                src : 'https://youtu.be/XRgpEPnZwPM'
            }
            ,
            {
                id : 9,
                title: 'লেকচার ৪.৩ঃ লিটারেচার রিভিউ লেখার নিয়ম উদাহরণসহ । How to write literature review with examples?',
                src : 'https://youtu.be/KL8AghDVA_Y'
            }
            ,
            {
                id : 10,
                title : 'লেকচার ৫.১ঃ রিসার্চ/লিটারেচার গ্যাপ বের করার উপায় । How to find out research/literature gaps?',
                src : 'https://youtu.be/Mcz64BZEuv0'
            }
            ,
            {
                id : 11,
                title : 'লেকচার ৫.২ঃ রিসার্চ কোয়েশ্চেন নির্ধারণ । Determination of research questions',
                src : 'https://youtu.be/e6-4kFmOVAk'
            }
            ,
            {
                id : 12,
                title : 'লেকচার ৫.৩ঃ রিসার্চ হাইপোথেসিস সেট করা । Setting Research Hypothesis',
                src : 'https://youtu.be/J6UXlT8IN6Y'
            }

        ]
     
        ,

        3 : [

            {
                id : 13 ,
                title : 'লেকচার ৬.১ঃ বিভিন্ন ধরণের রিসার্চ আর্টিকেল । Different types of research articles',
                src : 'https://youtu.be/Qrz00d_JFiY'
            }
            ,
            {
                id : 14 ,
                title : 'লেকচার ৬.২ঃ রিসার্চ আর্টিকেল/প্রোপোজাল-এর সাধারণ গঠণ । Structure of Research Article/Proposal',
                src : 'https://youtu.be/65N34eV6GFo'
            }
            ,
            {
                id : 15,
                title : 'লেকচার ৭.১ঃ রিসার্চ মেথডোলজি-এর বেসিক ধারণা । Research Methodology Basics',
                src : 'https://youtu.be/UcDMFlnYHmA'
            }
            ,
            {
                id : 16,
                title : 'লেকচার ৭.২.১ঃ রিসার্চ মেথডোলজি লিখার ধাপসমূহ (১ম অংশ) । Steps in writing research methodology',
                src : 'https://youtu.be/2As0JbLEWpI'
            }
            ,
            {
                id : 17,
                title : 'লেকচার ৭.২.২ঃ রিসার্চ মেথডোলজি লিখার ধাপসমূহ (২য় অংশ) । Steps in writing research methodology',
                src : 'https://youtu.be/90eLJ68SLus'
            }

        ]
          
          
          
        }
    };
  }


  updateCurrentActive(e) {
    this.setState({ CurrentActive: e });
  }

  render() {
    return (
      <CourseContext.Provider
        value={{
          CourseContent: this.state.CourseContent
        //   currentactive: this.state.CurrentActive,
        //   updateCurrentActive: (e) => this.updateCurrentActive(e),
        }}
      >
        {this.props.children}
      </CourseContext.Provider>
    );
  }
}
