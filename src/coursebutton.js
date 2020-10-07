import React , {Component} from "react";
import {withRouter} from 'react-router-dom'

class Coursebutton extends Component{
    render()
    {
        return(
            <button onClick={()=>{
                this.props.history.push(`/ResearchMethodology/${1}`,{
            id: 1,
            unit: 1,
        });
        window.location.reload()}}>Course</button>
        )
    }
}

export default withRouter(Coursebutton)