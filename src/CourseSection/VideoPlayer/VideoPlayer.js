import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withRouter} from 'react-router-dom'
import './VideoPlayer.css'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCheck , faLeaf, faUpload} from '@fortawesome/free-solid-svg-icons'
import { CourseContext } from '../../data'

class VideoPlayer extends Component {
    constructor() {
        super()
        this.state = {
            backnfortharray: null,
            selectedFile : null
        }
    }

    componentDidMount() {
        let a = []
        Object.keys(this.context.CourseContent).map((e) => {
            this.context.CourseContent[e].map((course) => {
                a.push(course)
            })
        })
        this.setState({ backnfortharray: a },function(){
            this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.props.id-1])

        })
       
        
    }
    handleNext() {
        if (this.context.CurrentContentDetails.id <= this.state.backnfortharray.length - 1) {
            // this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.context.CurrentContentDetails.id])
            if(this.props.Isopen){
            const node = ReactDOM.findDOMNode(this.props.rf.current)
            node.scrollTop = node.scrollTop + this.context.CurrentContentDetails.id * 20
            console.log(node.scrollTop)}
            this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.props.id])
            this.props.history.push(`/course/ResearchMethodology/${this.state.backnfortharray[this.props.id].id}`);

            // window.location.reload()
        }
    }
    handlePrev() {
        if (this.context.CurrentContentDetails.id - 2 >= 0) {
            // this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.props.id - 2])
            if(this.props.Isopen){
            const node = ReactDOM.findDOMNode(this.props.rf.current)
            node.scrollTop = node.scrollTop - this.context.CurrentContentDetails.id * 20
            console.log(node.scrollTop)
            }
            this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.props.id - 2])
            this.props.history.push(`/course/ResearchMethodology/${this.state.backnfortharray[this.props.id - 2].id}`);
            // window.location.reload()
        }
    }
    handleMarkasDone() {

    }
    onChangeHandler(event)
    {
        this.setState({ selectedFile: event.target.files[0],
            loaded: 0,})
    }
    handleupload()
    {
        const data = new FormData()
        data.append('file',this.state.selectedFile)
        axios.post("http://localhost:8000/upload?id=hello",data,{

        }).then(res =>{
            console.log(res.statusText)
        })
    }
    render() {
        return (
            <div className="VideoContainer">
                <div className={'unitinfo'}>
                    <span >Unit {this.context.CurrentContentDetails.unit}</span>
                </div>
                <div className={'LectureTitle'}>
                    <span style={{
                        width: '75%'
                    }}>{this.context.CurrentContentDetails.title}</span>
                    <span className={'inprogress'} style={{ paddingLeft: '10px', 
                    backgroundColor: '#112040', paddingRight: '10px', borderRadius: '50px', color: 'white',
                    alignItems:"center",
                    paddingBottom: '5px', marginLeft: 'auto', order: '2', paddingTop:'3px' }}>In Progress</span>
                </div>
                {
                    this.context.CurrentContentDetails.type==='lecture'?(<ReactPlayer playing={true} controls id="video"  url={this.context.CurrentContentDetails.src} />):(<div>
                        <div className={'unitinfo'}> Description </div>
                    <div className={'assignmentdetails'} >{this.context.CurrentContentDetails.description}</div>
                        
                        <div className={"FileUploader"}>
                        <label style={{color: '#575d76',fontWeight: 'bold'}}>Upload your file</label><br></br><br></br>
                           <div className={'filechooser'}>
                               <FontAwesomeIcon icon={faUpload} size={'2x'}></FontAwesomeIcon>
                            <input type="file" name="file" onChange={this.onChangeHandler.bind(this)} style={{padding:'20px'}} />
                            </div>
                           <br></br> <button type='button' onClick={this.handleupload.bind(this)} id="upload">Upload</button>
                        </div>
                        </div>)
                }
                
                

                <div className="forwardbackward">
                    <span onClick={this.handlePrev.bind(this)} className="btn1" style={{
                        backgroundColor: '#112040',
                        padding: '5px', paddingRight: '20px', paddingLeft: '20px', color: 'white', borderRadius: '50px', marginRight: 'auto', order: '1',
                        cursor: 'pointer',display: 'flex' , alignItems: 'center'
                    }}><FontAwesomeIcon id="leftarrow" icon={faAngleLeft} style={{ paddingRight: '5px' , paddingTop: '3px' }} size={'2x'}></FontAwesomeIcon> Previous Topic </span>
                    <span onClick={this.handleMarkasDone.bind(this)} className="btn2" style={{
                        backgroundColor: '#52c984',
                        padding: '10px', paddingRight: '20px', paddingLeft: '20px', color: 'white', borderRadius: '50px', marginLeft: 'auto', marginRight: 'auto', order: '2',
                        cursor: 'pointer'
                    }}>Mark as Done
                <FontAwesomeIcon id="tiksign" icon={faCheck} style={{ paddingLeft: '5px' }}></FontAwesomeIcon></span>
                    <span onClick={this.handleNext.bind(this)} className="btn3" style={{
                        backgroundColor: '#112040',
                        padding: '5px', paddingRight: '34px', paddingLeft: '34px', color: 'white', borderRadius: '50px', marginLeft: 'auto', order: '3',
                        cursor: 'pointer',display: 'flex' , alignItems: 'center'
                    }} >Next Topic <FontAwesomeIcon id="rightarrow" icon={faAngleRight} style={{ paddingLeft: '5px' , paddingTop: '3px' }} size={'2x'}></FontAwesomeIcon></span>

                </div>
            </div>
        )
    }
}
VideoPlayer.contextType = CourseContext
export default withRouter(VideoPlayer)