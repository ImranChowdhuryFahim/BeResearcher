import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Sidebar.css";
import { CaretLeftFilled, CaretRightOutlined } from "@ant-design/icons";
import Unit from "./Unit/Unit";
import CourseContent from "./CourseContent/CourseContent";
import { CourseContext } from "../../data";
class Sidebar extends Component {
  componentDidMount() {
    console.log(this.context.CourseContent);
    const node = ReactDOM.findDOMNode(this.props.rf.current);
    node.scrollTop = node.scrollTop + this.context.CurrentContentDetails.id * 5;
    console.log(node.scrollTop);
  }

  render() {
    return (
      <div
        className="Sidebar_Container"
        style={{
          width: this.props.Isopen ? "350px" : "0px",
          color: this.props.Isopen ? "black" : "transparent",
        }}
      >
        <div className="CourseHeading">
          <span className="coursetitle" style={{color:this.props.Isopen?'#ffffff':'transparent'}}>{this.context.CourseTitle}</span>
          {!this.props.Ismobile ? (
            this.props.Isopen ? (
              <CaretLeftFilled
                style={{ color: "white", fontSize: "40px" }}
                onClick={this.props.close}
              ></CaretLeftFilled>
            ) : (
              <CaretRightOutlined
                style={{
                  color: "black",
                  fontSize: "40px",
                  marginLeft: "-150px",
                }}
                onClick={this.props.open}
              ></CaretRightOutlined>
            )
          ) : (
            <div></div>
          )}
        </div>
        <div className="CourseContents" ref={this.props.rf}>
          {Object.keys(this.context.CourseContent).map((unit) => {
            return (
              <div>
                <Unit txt={"Unit " + unit}></Unit>
                {this.context.CourseContent[unit].map((course) => {
                  return (
                    <CourseContent
                      txt={course.title}
                      coursedata={course}
                      active={
                        this.context.CurrentContentDetails.id === course.id
                          ? "true"
                          : "false"
                      }
                    ></CourseContent>
                  );
                })}
              </div>
            );
          })}
          <div style={{ height: "140px" }}></div>
        </div>
      </div>
    );
  }
}
Sidebar.contextType = CourseContext;
export default Sidebar;
