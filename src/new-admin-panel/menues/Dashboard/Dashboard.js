import React, { Component } from 'react'
import './Dashboard.css'
import CardView from './CardView/CardView'
import TableView from './Table/TableView'
import { faDollarSign, faGraduationCap,  faUsers,faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons'


class Dashboard extends Component{
    render()
    {
        return(
            <div className={"dashboardContent"}>
                <div className={"cards"}>
                <CardView color={"#0054f0"} icon={faUsers} heading={"Total Students"}></CardView>
                <CardView color={"#dd4b39"} icon={faChalkboardTeacher} heading={"Total Supervisors"}></CardView>
                <CardView color={"#770ff5"} icon={faGraduationCap} heading={"Total Course"}></CardView>
                <CardView color={"#ffa930"} icon={faDollarSign} heading={"Fees Collection"}></CardView>
                </div>
                <TableView></TableView>
               
            </div>
           
        )
    }
}

export default Dashboard