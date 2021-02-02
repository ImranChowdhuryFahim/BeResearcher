import React, { Component } from "react";
import "./Events.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import axios from "axios";

class Events extends Component {
    state = {
        event: {},
        editorState: EditorState.createEmpty(),
      };
      onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
      };

      handleEventName(event)
      {
          let createEvent = this.state.event;
          createEvent["name"] = event.target.value;
          this.setState({event: createEvent})
      }

      handleEventDate(event)
      {
        let createEvent = this.state.event;
        createEvent["date"] = event.target.value;
        this.setState({event: createEvent})
      }

      handleEventStartTime(event)
      {
        let createEvent = this.state.event;
        createEvent["start_time"] = event.target.value;
        this.setState({event: createEvent})
      }
      handleEventEndTime(event)
      {
        let createEvent = this.state.event;
        createEvent["end_time"] = event.target.value;
        this.setState({event: createEvent})
      }

      handleCreateEvent()
      {
        let createEvent = this.state.event;
        createEvent["details"] = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        this.setState({event: createEvent})
        console.log(this.state.event)
      }

  render() {
    function uploadImageCallBack(file) {
      return new Promise((resolve, reject) => {
        const data = new FormData();
        data.append("file", file);
        //url changed
        axios.post(
          `https://nodeapi.beresearcherbd.com/api/uploadimage`,
          data
        ).then((res)=>{
          // console.log(res)
          resolve({ data: { link: res.data } })
        }).catch((err) => {
          reject(err)
        })
      });
    }
    return (
      <div className={"create-events"}>
        <h1 className={"heading_name"}>Event Name</h1>
        <input type="text" placeholder="e.g. Event Name" onChange={this.handleEventName.bind(this)}></input>
        <h1 className={"heading_name"}>Start Date</h1>
        <input type="date" placeholder="e.g. Event Name" onChange={this.handleEventDate.bind(this)}></input>
        <div style={{ display: "flex" , width:'100%' }}>
          <div style={{ width: '50%' , paddingRight: "5px"}}>
            <h1 className={"heading_name"}>Start Time</h1>
            <input type="time" placeholder="e.g. Start Time" onChange={this.handleEventStartTime.bind(this)}></input>
          </div>

          <div style={{ width: '50%' , paddingLeft: "5px"}}>
            <h1 className={"heading_name"}>End Time</h1>
            <input type="time" placeholder="e.g. End Time" onChange={this.handleEventEndTime.bind(this)}></input>
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
        <input type="submit" className={"create-event-button"} onClick={this.handleCreateEvent.bind(this)} value={'Create Event'}></input>
      </div>
    );
  }
}

export default Events;
