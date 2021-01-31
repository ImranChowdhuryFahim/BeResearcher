import React, { Component } from 'react'
import './Dashboard.css'
import axios from 'axios';
import CardView from './CardView/CardView'
import TableView from './Table/TableView'
import { faDollarSign, faGraduationCap,  faUsers,faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons'
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/core';


class Dashboard extends Component{
    constructor() {
        super();
        this.state = {
          studentList: null,
        };
      }
    componentDidMount()
    {
        axios({
            method: 'GET',
            url: "https://beresearcherbd.herokuapp.com/api/course/getcoursedata/Research%20Methodology",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }).then((Result)=>{
              this.setState({studentList: Result.data.enrolledStudents})
              console.log(this.state.studentList)
          })
    }
    render()
    {
        const loaderCss = css`
      height: 100vh;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
        return(
            <div className={"dashboardContent"}>
                {this.state.studentList !== null ? (
                <div>
                <div className={"cards"}>
                <CardView color={"#0054f0"} icon={faUsers} heading={"Total Students"}></CardView>
                <CardView color={"#dd4b39"} icon={faChalkboardTeacher} heading={"Total Supervisors"}></CardView>
                <CardView color={"#770ff5"} icon={faGraduationCap} heading={"Total Course"}></CardView>
                <CardView color={"#ffa930"} icon={faDollarSign} heading={"Fees Collection"}></CardView>
                </div>
                <TableView studentList={this.state.studentList}></TableView>
                </div>):(
                    <div style={{margin:'0 auto'}}>
                    <BeatLoader
                      css={loaderCss}
                      loading
                      size={'30'}
                      color={'blue'}
                    ></BeatLoader>
                  </div>
                )}
                
               
            </div>
           
        )
    }
}

export default Dashboard