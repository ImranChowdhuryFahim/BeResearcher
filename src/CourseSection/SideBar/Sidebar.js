import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Sidebar.css";
import { CaretLeftFilled, CaretRightFilled} from "@ant-design/icons";
import Unit from "./Unit/Unit";
import CourseContent from "./CourseContent/CourseContent";
import { CourseContext } from "../../data";
class Sidebar extends Component {
  componentDidMount() {
    if(this.props.id>1){
    // console.log(this.context.CourseContent);
    const node = ReactDOM.findDOMNode(this.props.rf.current);
    node.scrollTop = node.scrollTop + this.props.id * 20;
    // console.log(node.scrollTop);
  }
  }


  render() {
    return (

     <div>
         {
             this.props.Isopen?(<div
                className="Sidebar_Container"
                style={{
                  width: this.props.Isopen ? "350px" : "0px",
                  color: this.props.Isopen ? "black" : "transparent",
                }}
              >
                <div className="CourseHeading">
                  <span className="coursetitle" style={{color:this.props.Isopen?'#ffffff':'transparent', fontSize:this.props.Isopen?'18px':'0px'}}>{this.context.CourseTitle}</span>
                      <CaretLeftFilled
                        id="leftArrow"
                        style={{ color: "white", fontSize: "40px" }}
                        onClick={this.props.close}
                      ></CaretLeftFilled>
                    
                </div>
                <div className="CourseContents" ref={this.props.rf}>
                  {Object.keys(this.context.CourseContent).map((unit) => {
                    return (
                      <div key={unit}>
                        <Unit txt={"Unit " + unit} key={unit}></Unit>
                        {this.context.CourseContent[unit].map((course) => {
                          return (
                            <CourseContent
                              txt={course.title}
                              coursedata={course}
                              key={course.id}
                              active={
                                this.context.CurrentContentDetails.id === course.id
                                  ? "true"
                                  : "false"
                              }
                              open={this.props.open}
                              close={this.props.close}
                            ></CourseContent>
                          );
                        })}
                      </div>
                    );
                  })}
                  <div style={{ height: "140px" }}></div>
                </div>
              </div>):(
                  <div>
                      <CaretRightFilled
                      style={{fontSize: this.props.Ismobile?'0px':'60px', margin:'10px', marginLeft:'30px'}} onClick={this.props.open}></CaretRightFilled>
                  </div>
              )
         }
      
      </div>
    );
  }
}
Sidebar.contextType = CourseContext;
export default Sidebar;
