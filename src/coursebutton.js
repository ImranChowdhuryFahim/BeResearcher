import React , {Component} from "react";
import {withRouter} from 'react-router-dom'
import { CourseContext } from './data'
import axios from 'axios'

class Coursebutton extends Component{
    render()
    {
        return(
            <div>
            <button onClick={()=>{
                this.props.history.push(`/course/ResearchMethodology/${1}`);
       }}>Course</button>
       <button onClick={()=>{

           const data = JSON.stringify({ courseTitle : 'Research Methodology' })
 

        //    axios({
        //        method: 'POST',
        //        url: `http://localhost:8000/api/course/create`,
        //        headers:{
        //                 'Accept': 'application/json',
        //                  'Content-Type': 'application/json'
        //             },
        //        data: JSON.stringify({ courseTitle : 'Research Methodology',
        //        courseContent: this.context.CourseContent,
        //        createdBy: 'Md Sabir Hossain'
            
        //     })
        //    }).then((res)=>{
        //        console.log(res.data)
        //    })
           
        //    fetch('http://localhost:8000/api/course/getcoursedata',
        // {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //          'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ courseTitle : 'Research Methodology' })
 
        // }
        // ).then(res=>res.json()).then(result=> {
        //     console.log(result)
        // })
       }}>Get</button>
       </div>
        )
    }
}

Coursebutton.contextType = CourseContext
export default withRouter(Coursebutton)