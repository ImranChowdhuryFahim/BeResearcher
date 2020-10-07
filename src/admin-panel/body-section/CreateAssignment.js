import React from "react";
import "./bodysection.css";

import { CourseContext } from "../../data";

class CreateAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }
  handleSubmit(event) {
    const { title, body } = this.state;
    console.log(title, body);
    this.context.updateAssignment(1);
    event.preventDefault();
  }

  render() {
    return (
      <div className="create-assignment">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="unit">Select Unit</label>
          <select name="unit" id="unit">
            <option value="">Choose a unit</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
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
              rows="30"
              cols="30"
              placeholder="Describe the Assignment"
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
        <pre>{JSON.stringify(this.context.CourseContent, null, 4)}</pre>
      </div>
    );
  }
}

CreateAssignment.contextType = CourseContext;

export default CreateAssignment;
