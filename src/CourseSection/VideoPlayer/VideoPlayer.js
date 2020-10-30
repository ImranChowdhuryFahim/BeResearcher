/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withRouter} from 'react-router-dom'
import './VideoPlayer.css'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCheck , faUpload} from '@fortawesome/free-solid-svg-icons'
import { CourseContext } from '../../data'
import { Line } from 'rc-progress';


class VideoPlayer extends Component {
    constructor() {
        super()
        this.state = {
            backnfortharray: null,
            selectedFile : null,
            videowatched: false,
            percentage: 0,
            donebuttonstyle: {
                backgroundColor: '#D3D3D3',
                padding: '10px', paddingRight: '20px', paddingLeft: '20px', color: 'white', borderRadius: '50px', marginLeft: 'auto', marginRight: 'auto', order: '2',
                cursor: 'not-allowed'
            }
        }
    }
// '#52c984' 'pointer'
    componentDidMount() {
        
        let a = []
        Object.keys(this.context.CourseContent).map((e) => {
            // eslint-disable-next-line array-callback-return
            this.context.CourseContent[e].map((course) => {
                a.push(course)
            })
        })
        this.setState({ backnfortharray: a },function(){
            this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.props.id-1])
            
        })
       
        
    }

    componentDidUpdate()
    {
        if(this.state.videowatched)
        {
            this.setState({ videowatched: false })
        }
    }
    handleNext() {
        if ((this.context.CurrentContentDetails.id <= this.state.backnfortharray.length - 1) && (parseInt(this.context.currentCourseProgress.completedItem)  >= parseInt(this.props.id))) {
            // this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.context.CurrentContentDetails.id])
            // if(this.props.Isopen){
            // const node = ReactDOM.findDOMNode(this.props.rf.current)
            // node.scrollTop = node.scrollTop + this.context.CurrentContentDetails.id 
            // console.log(node.scrollTop)}
            this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.props.id])
            this.props.history.push(`/course/research-methodology/${this.state.backnfortharray[this.props.id].id}`);

            // window.location.reload()
        }
    }
    handlePrev() {
        if (this.context.CurrentContentDetails.id - 2 >= 0) {
            // this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.props.id - 2])
            if(this.props.Isopen){
            const node = ReactDOM.findDOMNode(this.props.rf.current)
            node.scrollTop = node.scrollTop - this.context.CurrentContentDetails.id * 10
            console.log(node.scrollTop)
            }
            this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.props.id - 2])
            this.props.history.push(`/course/research-methodology/${this.state.backnfortharray[this.props.id - 2].id}`);
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

        const options = {
            onUploadProgress: (ProgressEvent) =>{
                const {loaded, total} = ProgressEvent;
                let percent = Math.floor( (loaded*100)/total )
                this.setState({percentage: percent})
                console.log(`${loaded}kb of ${total}kb | ${percent}`)
            }
        }
         //url changed
        axios.post(`https://nodeapi.beresearcherbd.com/api/upload?id=${ this.context.CurrentUserDetails.id }`,data,options).then(res =>{
            console.log(res.statusText)
            if(parseInt(this.props.id)> parseInt(this.context.currentCourseProgress.completedItem)){
            this.context.UpdatecurrentCourseProgress({
                _id: this.context.currentCourseProgress._id,
                title: this.context.currentCourseProgress.title,
                completedItem: parseInt(this.context.currentCourseProgress.completedItem) + 1
            })
            this.setState({percentage: 0})
            setTimeout(()=>{
                axios({
                    method: 'PUT',
                    url: 'https://beresearcherbd.herokuapp.com/api//student/courseprogress',
                    headers:{
                                        'Accept': 'application/json',
                                         'Content-Type': 'application/json'
                                    },
                               data: JSON.stringify( {
                                   
                                   email: this.context.CurrentUserDetails.email,
                                   id: this.context.currentCourseProgress._id,
                                   completedItem: this.context.currentCourseProgress.completedItem,
                                   currentContentDetails: ( parseInt(this.state.backnfortharray.length)-1>=parseInt(this.props.id))? this.state.backnfortharray[this.props.id]: this.state.backnfortharray[this.props.id-1]
                               })
                }).then((result)=>{
                    console.log(result)
                    console.log(this.state.backnfortharray.length)
                    if(parseInt(this.state.backnfortharray.length)-1>=parseInt(this.props.id)){
                   this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.props.id])
                   this.props.history.push(`/course/research-methodology/${parseInt(this.context.currentCourseProgress.completedItem)+1}`)}
                }).catch((err)=>{
                    console.log(err)
                })
            },1000)
        }
        })
    }
    handleVideoEnd()
    {
        if(parseInt(this.props.id)> parseInt(this.context.currentCourseProgress.completedItem)){
        //console.log(this.context.currentCourseProgress)
        this.context.UpdatecurrentCourseProgress({
            _id: this.context.currentCourseProgress._id,
            title: this.context.currentCourseProgress.title,
            completedItem: parseInt(this.context.currentCourseProgress.completedItem) + 1
        })
        setTimeout(()=>{
            axios({
                method: 'PUT',
                url: 'https://beresearcherbd.herokuapp.com/api//student/courseprogress',
                headers:{
                                    'Accept': 'application/json',
                                     'Content-Type': 'application/json'
                                },
                           data: JSON.stringify( {
                               
                               email: this.context.CurrentUserDetails.email,
                               id: this.context.currentCourseProgress._id,
                               completedItem: this.context.currentCourseProgress.completedItem,
                               currentContentDetails: ( parseInt(this.state.backnfortharray.length)-1>=parseInt(this.props.id))? this.state.backnfortharray[this.props.id]: this.state.backnfortharray[this.props.id-1]
                           })
            }).then((result)=>{
                console.log(result)
                console.log(this.state.backnfortharray.length)
                if(parseInt(this.state.backnfortharray.length)-1>=parseInt(this.props.id)){
               this.context.UpdateCurrentContentDetails(this.state.backnfortharray[this.props.id])
               this.props.history.push(`/course/research-methodology/${parseInt(this.context.currentCourseProgress.completedItem)+1}`)}
            }).catch((err)=>{
                console.log(err)
            })
        },1000)
        
        
        // this.setState({ videowatched : true } , function(){
        //     this.setState({ donebuttonstyle : {
        //         backgroundColor: '#52c984',
        //         padding: '10px', paddingRight: '20px', paddingLeft: '20px', color: 'white', borderRadius: '50px', marginLeft: 'auto', marginRight: 'auto', order: '2',
        //         cursor: 'pointer'
        //     } })
        // })
    }
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
                    {parseInt(this.context.currentCourseProgress.completedItem) >= parseInt(this.props.id)?(
                        <span className={'inprogress'} style={{ paddingLeft: '10px', 
                    backgroundColor: '#31c984', paddingRight: '10px', borderRadius: '50px', color: 'white',
                    alignItems:"center",
                    paddingBottom: '5px', marginLeft: 'auto', order: '2', paddingTop:'3px' , fontWeight: 'bold'}}>Completed</span>
                    ):(
                        <span className={'inprogress'} style={{ paddingLeft: '10px', 
                    backgroundColor: '#112040', paddingRight: '10px', borderRadius: '50px', color: 'white',
                    alignItems:"center",
                    paddingBottom: '5px', marginLeft: 'auto', order: '2', paddingTop:'3px' }}>In Progress</span>
                    )}
                    
                </div>
                {
                    this.context.CurrentContentDetails.type==='lecture'?(<ReactPlayer playing={true} controls id="video" onEnded={this.handleVideoEnd.bind(this)} url={this.context.CurrentContentDetails.src} />):(
                    <div>
                        {this.context.CurrentContentDetails.type==='assignment'?(
                            <div>
                                <div className={'unitinfo'}> Description </div>
                    <div className={'assignmentdetails'} >{this.context.CurrentContentDetails.description}</div>
                        
                        <div className={"FileUploader"}>
                        <label style={{color: '#575d76',fontWeight: 'bold'}}>Upload your file</label><br></br><br></br>
                           <div className={'filechooser'}>
                               <FontAwesomeIcon icon={faUpload} size={'2x'}></FontAwesomeIcon>
                            <input type="file" name="file" onChange={this.onChangeHandler.bind(this)} style={{padding:'20px'}} />
                            </div>
                            <Line id="uploadprogressbar" percent={this.state.percentage} strokeWidth="1" strokeColor="darkblue" />
                           <br></br> <button type='button' onClick={this.handleupload.bind(this)} id="upload">Upload</button>
                        </div>
                            </div>
                        ):(
                            <div></div>
                        )}
                        
                        </div>)
                }
                
                

                <div className="forwardbackward">
                    <span onClick={this.handlePrev.bind(this)} className="btn1" style={{
                        backgroundColor: '#112040',
                        padding: '5px', paddingRight: '20px', paddingLeft: '20px', color: 'white', borderRadius: '50px', marginRight: 'auto', order: '1',
                        cursor: 'pointer',display: 'flex' , alignItems: 'center'
                    }}><FontAwesomeIcon id="leftarrow" icon={faAngleLeft} style={{ paddingRight: '5px' , paddingTop: '3px' }} size={'2x'}></FontAwesomeIcon> Previous Topic </span>
                    <span onClick={this.handleMarkasDone.bind(this)} className="btn2" style={this.state.donebuttonstyle}>Mark as Done
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