import React, { Component } from "react";
import "./Events.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToMarkdown from "draftjs-to-markdown";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      startDate: null,
      startTime: null,
      endTime: null,
      authorName: null,
      editorState: EditorState.createEmpty(),
    };
  }
  componentDidMount() {
    let localData = JSON.parse(localStorage.getItem("login"));
    if (localData && localData.login) {
      axios({
        method: "GET",
        url: `https://beresearcherbd.herokuapp.com/api/student/getdetails`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          auth: localData.token,
        },
      }).then((result) => {
        this.setState({
          authorName: result.data.firstName + " " + result.data.lastName,
        });
      });
    }
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  handleEventName(event) {
    this.setState({ name: event.target.value });
  }

  handleEventDate(event) {
    this.setState({ startDate: event.target.value });
  }

  handleEventStartTime(event) {
    this.setState({ startTime: event.target.value });
  }
  handleEventEndTime(event) {
    this.setState({ endTime: event.target.value });
  }

  handleCreateEvent() {
    const content = this.state.editorState.getCurrentContent();
    const rawObject = convertToRaw(content);
    const markdownString = draftToMarkdown(rawObject);
    const d = new Date();

    if (this.state.name === null) {
      window.alert("Please enter the event name.");
    }
    else if(this.state.startDate === null){
      window.alert("Please enter the event start date")
    }
    else if(this.state.startTime === null){
      window.alert("Please enter the event start time")
    }
    else if(this.state.endTime === null){
      window.alert("Please enter the event end time")
    }
    else {
      let Event = {
        name: this.state.name,
        startDate : this.state.startDate,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        body: markdownString,
        authorName: this.state.authorName,
        createdAt: d,
      };
      this.setState({ laoding: true });

      axios
        .post("https://beresearcherbd.herokuapp.com/api/event/create-event", Event)
        .then((Result) => {
          setTimeout(() => {
            this.setState({ laoding: false });
          }, 2000);
          console.log(Event);
          window.alert("Successfully created a new event.");
        })
        .catch((err) => {
          setTimeout(() => {
            this.setState({ laoding: false });
          }, 2000);
          window.alert("Oops! Failed to create a new event.");
        });
    }
  }

  render() {
    function uploadImageCallBack(file) {
      return new Promise((resolve, reject) => {
        const data = new FormData();
        data.append("file", file);
        //url changed
        axios
          .post(`https://nodeapi.beresearcherbd.com/api/uploadimage`, data)
          .then((res) => {
            // console.log(res)
            resolve({ data: { link: res.data } });
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
    return (
      <div className={"create-events"}>
        <h1 className={"heading_name"}>Event Name</h1>
        <input
          type="text"
          placeholder="e.g. Event Name"
          onChange={this.handleEventName.bind(this)}
        ></input>
        <h1 className={"heading_name"}>Start Date</h1>
        <input
          type="date"
          placeholder="e.g. Event Name"
          onChange={this.handleEventDate.bind(this)}
        ></input>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "50%", paddingRight: "5px" }}>
            <h1 className={"heading_name"}>Start Time</h1>
            <input
              type="time"
              placeholder="e.g. Start Time"
              onChange={this.handleEventStartTime.bind(this)}
            ></input>
          </div>

          <div style={{ width: "50%", paddingLeft: "5px" }}>
            <h1 className={"heading_name"}>End Time</h1>
            <input
              type="time"
              placeholder="e.g. End Time"
              onChange={this.handleEventEndTime.bind(this)}
            ></input>
          </div>
        </div>
        <div className={"event-body"}>
          <Editor
            editorState={this.state.editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
            placeholder="Event Details"
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: {
                uploadCallback: uploadImageCallBack,
                alt: { present: true, mandatory: false },
              },
            }}
          />
        </div>
        <button
          className={"post-button"}
          onClick={this.handleCreateEvent.bind(this)}
        >
          {this.state.laoding && (
            <CircularProgress
              style={{
                color: "white",
                height: "20px",
                width: "20px",
                marginRight: "10px",
              }}
            ></CircularProgress>
          )}
          {!this.state.laoding && "Create Event"}
          {this.state.laoding && "Creating Event..."}
        </button>
      </div>
    );
  }
}

export default Events;
