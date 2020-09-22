import React , { Component } from 'react'
import './VideoPlayer.css'
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight , faCheck } from '@fortawesome/free-solid-svg-icons'

class VideoPlayer extends Component{
    render()
    {
        return(
            <div className= "VideoContainer">
                <div className={'unitinfo'}>
                    <span >Unit 1</span>
                </div>
                <div className={'LectureTitle'}>
                    <span>লেকচার ১ঃ গবেষণা কি? কেন করব? লাভ কি? । What is research? Why to conduct research?</span>
                    <span className={'inprogress'} style={{  paddingLeft: '10px' ,backgroundColor: '#112040' , paddingRight: '10px', borderRadius:'50px', color: 'white', paddingTop:'5px', paddingBottom:'5px', marginLeft: 'auto', order: '2' }}>In Progress</span>
                </div>
               <ReactPlayer controls id="video" width={'100px'} url='https://youtu.be/Ra6vA6-GbiI'/>
                
                <div className="forwardbackward">
                    <span className="btn1" style={{ backgroundColor: '#112040' ,
                padding: '15px' , paddingRight: '20px' ,paddingLeft: '20px', color: 'white', borderRadius: '50px',marginRight: 'auto', order: '1'}}><FontAwesomeIcon icon={faAngleLeft} style={{paddingRight: '5px'}}>></FontAwesomeIcon> Previous Topic </span>
                    <span  className="btn2" style={{ backgroundColor: '#52c984' ,
                padding: '15px' , paddingRight: '20px' ,paddingLeft: '20px' ,color: 'white', borderRadius: '50px' ,marginLeft: 'auto', marginRight: 'auto', order: '2'}}>Mark as Done 
                <FontAwesomeIcon icon={faCheck} style={{paddingLeft: '5px'}}></FontAwesomeIcon></span>
                    <span className="btn3" style={{ backgroundColor: '#112040' ,
                padding: '15px' , paddingRight: '34px' ,paddingLeft: '34px', color: 'white', borderRadius: '50px' ,marginLeft: 'auto', order: '3'}} >Next Topic <FontAwesomeIcon icon={faAngleRight} style={{paddingLeft: '5px'}}>></FontAwesomeIcon></span>

                </div>
            </div>
        )
    }
}

export default VideoPlayer