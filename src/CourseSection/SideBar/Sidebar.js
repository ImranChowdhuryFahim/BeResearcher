import React , { Component } from 'react'
import './Sidebar.css'
import { CaretLeftFilled, CaretRightOutlined } from "@ant-design/icons";
import Unit from './Unit/Unit'
import CourseContent from './CourseContent/CourseContent'
import { CourseContext } from '../../data'
class Sidebar extends Component{

    componentDidMount()
    {
        console.log(this.context.CourseContent)
    }

    render()
    {
        return(
            <div className="Sidebar_Container" style={{ width: this.props.Isopen?'350px':'0px' , color:this.props.Isopen?'black':'transparent'}}>
                <div className="CourseHeading" style={{ height: '75px' , backgroundColor: '#102040', display: 'flex' ,alignItems : 'center' }}>
                
                    <span id="coursetitle" style={{ fontSize: '18px', fontWeight: 'bold' , color:this.props.Isopen?'#ffffff':'transparent', marginLeft: '25px' , paddingRight: '65px'}}>গবেষক হতে চাই ভিডিও সিরিজ</span>
                {
                 !this.props.Ismobile?(
                    this.props.Isopen ? (
                        <CaretLeftFilled style={{ color: 'white', fontSize: '40px'  }} onClick={
                            this.props.close
                        }></CaretLeftFilled>
                    ) :
                    (<CaretRightOutlined style={{ color: 'black', fontSize: '40px' , marginLeft: '-150px' }}
                    onClick={
                        this.props.open
                    }>

                    </CaretRightOutlined>)):
                    (<div></div>)
                }
                   
                    
                </div>
               <div className="CourseContents">
                {
                   Object.keys(this.context.CourseContent).map( (unit) => {
                        return(
                            <div>
                            <Unit txt={'Unit '+ unit}></Unit>
                            {
                                this.context.CourseContent[unit].map( (course) => {
                                    return(
                                        <CourseContent txt={course.title} coursedata={course} active={this.context.CurrentContentDetails.id===course.id?'true':'false'}></CourseContent>
                                    )
                                } )
                            }
                            </div>
                        )
                        
                   } )
                }
                <div style={{height: '140px'}}></div>
                </div>
            </div>
        )
    }
}
Sidebar.contextType= CourseContext
export default Sidebar