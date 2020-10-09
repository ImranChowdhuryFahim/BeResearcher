import React,{Component} from 'react'
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { CourseContext } from '../data'

class Dashboard extends Component{
    render()
    {
        return(
            <div className={'courseContainer'}>
                <div className={'course'}>
                <div className={'course-info'}>
                    <h6>Course</h6>
                    <h2>Research Methodology</h2>
                    <a href="#"> View all chapters <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon> </a>
                </div>


                <div className={'course-progress'}>
                    <div className={'progress-container'}>
                        <div data-percentage={'50px'} className={'progress'}>
                            <span style={{width:this.context.CurrentUserDetails.completed}}></span>
                            <div className={'progress-text'}>
                                08/16 Challanges
                            </div>
                        </div>
                    </div>
                    <h6>Unit {this.context.CurrentContentDetails.unit}</h6>
        <h2 style={{fontSize: '14px'}}>{this.context.CurrentContentDetails.title}</h2>
                    <button className={'btn'}>Continue</button>
                </div>
                </div>
            </div>
        )
    }
}

Dashboard.contextType = CourseContext
export default Dashboard