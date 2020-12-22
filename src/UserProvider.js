import React, { Component } from 'react';

export const StudentContext = React.createContext();

export class StudentProvider extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      receivedAnnouncement: [],
    };
    this.updateRecievedAnnouncement.bind(this);
  }
  updateRecievedAnnouncement(x) {
    this.setState({ receivedAnnouncement: x });
  }
  render() {
    return (
      <StudentContext.Provider
        value={{
          updateRecievedAnnouncement: this.updateRecievedAnnouncement,
        }}
      >
        {this.props.children}
      </StudentContext.Provider>
    );
  }
}
