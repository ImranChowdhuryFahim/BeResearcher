import React, { Component } from 'react';
import './CourseContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { CourseContext } from '../../../data';
import { withRouter } from 'react-router-dom';
// import { faGratipay } from '@fortawesome/free-brands-svg-icons'

class CourseContent extends Component {
  handleclick(event) {
    event.stopPropagation();
    if (
      parseInt(this.context.currentCourseProgress.completedItem) + 1 >=
      parseInt(this.props.coursedata.id)
    ) {
      this.context.UpdateCurrentContentDetails(this.props.coursedata);
      this.props.history.push(
        `/course/research-methodology/${this.props.coursedata.id}`
      );
    }
    // window.location.reload()
    if (window.innerWidth <= 800) {
      this.props.close();
    }
  }
  render() {
    return (
      <div className="CourseContent" onClick={this.handleclick.bind(this)}>
        {this.props.done === 'true' ? (
          <span style={{ marginLeft: '5px', paddingRight: '10px' }}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              color={'#52c984'}
            ></FontAwesomeIcon>
          </span>
        ) : (
          <span style={{ marginLeft: '5px', paddingRight: '10px' }}>
            <FontAwesomeIcon
              icon={faDotCircle}
              color={'gray'}
            ></FontAwesomeIcon>
          </span>
        )}
        <span
          style={{
            fontSize: '13px',
            color: this.props.active === 'true' ? '#00a4ea' : 'black',
            fontWeight: this.props.active === 'true' ? 'bold' : 'normal',
          }}
        >
          {this.props.txt}
        </span>
      </div>
    );
  }
}
CourseContent.contextType = CourseContext;
export default withRouter(CourseContent);
