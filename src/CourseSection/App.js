import React, { Component } from 'react'
import ReactDOM from "react-dom";
import Header from './Header/Header'
import Sidebar from './SideBar/Sidebar'
import VideoPlayer from './VideoPlayer/VideoPlayer'
import { CourseContext } from '../data'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'
import { css } from '@emotion/core'
import './App.css'

class App extends Component {

    constructor()
    {
        super()
        this.state = {
            open: true,
            Ismobile: false,
            myref : React.createRef()
        }
    }
    close()
    {
        this.setState({open: false})
        // console.log(this.state.open)
    }
    open()
    {
        this.setState({open: true})
        // const node = ReactDOM.findDOMNode(this.state.myref.current);
        // node.scrollTop = node.scrollTop + this.props.match.params.ContentId * 20;
        // console.log(this.state.open)
    }
    toggole()
    {
        this.setState({open: !this.state.open})
        // console.log(this.state.open)
    }

    updateDimensions = () => {
        if(window.innerWidth<=800){
            this.close()
            this.setState({Ismobile: true})
        }
        else{
            this.open()
            this.setState({Ismobile: false})
        }
      }
      componentDidMount() {
        // console.log(this.props.match.params)
        axios.get(`http://localhost:8000/api/course/getcoursedata/${'Research Methodology'}`)
        .then((res)=>{
            console.log(res.data)
            setTimeout(() => {
                this.context.UpdateCourseContent(res.data[0].courseContent)
            }, 2000);
        })
        axios.get(`http://localhost:8000/api/student/getdetails/${'imran.cuet.cse17@gmail.com'}`)
        .then((res)=>{
            console.log(res.data)
            setTimeout(() => {
                this.context.UpdateCurrentContentDetails(res.data.enrolledCourses[0].currentContentDetails)
            }, 2000);
        })
        if(window.innerWidth<=800){
            this.close()
            this.setState({Ismobile: true})
        }
        else{
            this.open()
            this.setState({Ismobile: false})
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
        `
        return (
            <div>
                {this.context.CurrentContentDetails!==null && this.context.CourseContent!==null?(<div className="CourseSection">
                <Header key={0} toggole={this.toggole.bind(this)}></Header>
                <Sidebar key={1} Isopen={this.state.open} id={this.props.match.params.ContentId}  open={this.open.bind(this)} Ismobile={this.state.Ismobile} rf={this.state.myref} close={this.close.bind(this)}></Sidebar>
                <VideoPlayer key={2} Isopen={this.state.open} rf={this.state.myref} id={this.props.match.params.ContentId} ></VideoPlayer>
            </div>):(
                <div>
                    <BeatLoader css={loaderCss} loading size={'30'} color={'blue'} ></BeatLoader>
                </div>
            )}
            
            </div>
        )
    }
}
App.contextType= CourseContext
export default App