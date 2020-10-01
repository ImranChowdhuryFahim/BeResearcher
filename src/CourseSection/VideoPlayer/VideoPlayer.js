import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './VideoPlayer.css'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCheck , faUpload} from '@fortawesome/free-solid-svg-icons'
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
        this.setState({ backnfortharray: a })
    }
    handleNext() {
        if (this.context.CurrentContentDetails.id <= this.state.backnfortharray.length - 1) {
            this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.context.CurrentContentDetails.id])
            const node = ReactDOM.findDOMNode(this.props.rf.current)
            node.scrollTop = node.scrollTop + this.context.CurrentContentDetails.id * 5
            console.log(node.scrollTop)
        }
    }
    handlePrev() {
        if (this.context.CurrentContentDetails.id - 2 >= 0) {
            this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.context.CurrentContentDetails.id - 2])
            const node = ReactDOM.findDOMNode(this.props.rf.current)
            node.scrollTop = node.scrollTop - this.context.CurrentContentDetails.id * 5
            console.log(node.scrollTop)
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
                    <span>{this.context.CurrentContentDetails.title}</span>
                    <span className={'inprogress'} style={{ paddingLeft: '10px', backgroundColor: '#112040', paddingRight: '10px', borderRadius: '50px', color: 'white', paddingTop: '5px', paddingBottom: '5px', marginLeft: 'auto', order: '2' }}>In Progress</span>
                </div>
                {
                    this.context.CurrentContentDetails.type==='lecture'?(<ReactPlayer playing={true} controls id="video" width={'100px'} url={this.context.CurrentContentDetails.src} />):(<div>
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
                        padding: '15px', paddingRight: '20px', paddingLeft: '20px', color: 'white', borderRadius: '50px', marginRight: 'auto', order: '1',
                        cursor: 'pointer'
                    }}><FontAwesomeIcon id="leftarrow" icon={faAngleLeft} style={{ paddingRight: '5px' }}>></FontAwesomeIcon> Previous Topic </span>
                    <span onClick={this.handleMarkasDone.bind(this)} className="btn2" style={{
                        backgroundColor: '#52c984',
                        padding: '15px', paddingRight: '20px', paddingLeft: '20px', color: 'white', borderRadius: '50px', marginLeft: 'auto', marginRight: 'auto', order: '2',
                        cursor: 'pointer'
                    }}>Mark as Done
                <FontAwesomeIcon id="tiksign" icon={faCheck} style={{ paddingLeft: '5px' }}></FontAwesomeIcon></span>
                    <span onClick={this.handleNext.bind(this)} className="btn3" style={{
                        backgroundColor: '#112040',
                        padding: '15px', paddingRight: '34px', paddingLeft: '34px', color: 'white', borderRadius: '50px', marginLeft: 'auto', order: '3',
                        cursor: 'pointer'
                    }} >Next Topic <FontAwesomeIcon id="rightarrow" icon={faAngleRight} style={{ paddingLeft: '5px' }}>></FontAwesomeIcon></span>

                </div>
            </div>
        )
    }
}
VideoPlayer.contextType = CourseContext
export default VideoPlayer