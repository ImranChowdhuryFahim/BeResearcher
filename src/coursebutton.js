import React , {Component} from "react";
import {withRouter} from 'react-router-dom'

class Coursebutton extends Component{
    render()
    {
        return(
            <button onClick={()=>{
                this.props.history.push(`/ResearchMethodology/${1}`);
       }}>Course</button>
        )
    }
}

export default withRouter(Coursebutton)