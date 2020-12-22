import React from 'react';
import './bodysection.css';

import { CourseContext } from '../../data';
// import { faThinkPeaks } from "@fortawesome/free-brands-svg-icons";

class CreateAnnouncement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      to: [], // all possible receivers
      target: 'all', // selected receiver, all by default or first selection
      isSubmitting: false,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTargetChange = this.handleTargetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }
  handleTargetChange(event) {
    this.setState({ target: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    // build target to be send to api server
    let targetF;
    if (this.state.target === 'all') {
      targetF = this.state.to.map(({ _id }) => _id);
      console.log('all target passed, and the target array looks:', targetF);
    } else if (this.state.target === 'public') {
      targetF = ['public'];
    } else targetF = [this.state.target];

    this.setState({ isSubmitting: true });
    console.log(this.state);
    console.log('target', targetF);
    fetch('https://beresearcherbd.herokuapp.com/api/postannouncement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        message: this.state.body,
        author: this.context.CurrentUserDetails.name,
        target: targetF,
      }),
    })
      .then((res) => {
        alert('Successfully sent');
        console.log('Successfully sendt');
        this.setState({ isSubmitting: false });
      })
      .catch(() => {
        alert('Oops, something went wrong. Try creating again.');
        this.setState({ isSubmitting: false });
      });
  }

  componentDidMount() {
    fetch('https://beresearcherbd.herokuapp.com/api/student/getall')
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState(
          () => ({
            to: resp,
          }),
          () => {
            window.to = this.state.to;
            console.log('********* ', this.state.to);
          }
        );
      });
  }

  render() {
    const { title, body, to, isSubmitting } = this.state;
    return (
      <div className="create-assignment">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="to">Select to</label>
          <select name="to" id="to" onChange={this.handleTargetChange}>
            <option value="all">All Stundent</option>
            <option value="public">Public Announcement</option>
            {this.state.to.map(({ _id, firstName, lastName }) => (
              <option value={_id}>{firstName + ' ' + lastName}</option>
            ))}
          </select>
          <label htmlFor="title">
            Title:
            <input
              id="title"
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </label>

          <label htmlFor="body">
            Body:
            <textarea
              name="body"
              id="body"
              value={this.state.body}
              onChange={this.handleBodyChange}
              rows="25"
              cols="30"
              placeholder="Describe the Message"
            />
          </label>

          <button
            type="submit"
            disabled={title === '' || body === '' || to === ''}
          >
            {isSubmitting ? (
              <div className="loading">Creating</div>
            ) : (
              <div>Create</div>
            )}
          </button>
        </form>
      </div>
    );
  }
}

CreateAnnouncement.contextType = CourseContext;

export default CreateAnnouncement;
