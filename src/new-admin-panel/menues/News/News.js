import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToMarkdown from "draftjs-to-markdown";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import "./News.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laoding: false,
      title: null,
      catagory: "Webinar",
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
      editorState: editorState,
    });
  };
  handleNewsTitle(event) {
    this.setState({ title: event.target.value});
  }
  handleNewsCatagory(event) {
    this.setState({ catagory: event.target.value });
  }
  handleCreateNews() {
    const content = this.state.editorState.getCurrentContent();
    const rawObject = convertToRaw(content);
    const markdownString = draftToMarkdown(rawObject);
    const d = new Date();


    if (this.state.title === null) {
      window.alert("Please enter the news title.");
    } else {
      let News = {
        title: this.state.title,
        catagory: this.state.catagory,
        body: markdownString,
        authorName: this.state.authorName,
        createdAt: d,
      };
      this.setState({ laoding: true });

      axios
        .post(
          "https://beresearcherbd.herokuapp.com/api/news/create-news",
          News
        )
        .then((Result) => {
          setTimeout(() => {
            this.setState({ laoding: false });
          }, 2000);
          console.log(News);
          window.alert("Successfully created a new news.")
        })
        .catch((err)=>{
          setTimeout(() => {
            this.setState({ laoding: false });
          }, 2000);
          window.alert("Oops! Failed to create a new news.")
        })
        ;
      
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
      <div className={"create-news"}>
        <h1 className={"heading_name"}>News Title</h1>
        <input
          type="text"
          placeholder="e.g. How to write a research paper"
          onChange={this.handleNewsTitle.bind(this)}
        ></input>

        <h1 className={"heading_name"}>Choose Catagory</h1>
        <select onChange={this.handleNewsCatagory.bind(this)}>
          <option value={"Webinar"}>Webinar</option>
          <option value={"Notice"}>Notice</option>
          <option value={"Training"}>Training</option>
          <option value={"Workshop"}>Workshop</option>
          <option value={"Course"}>Course</option>
          <option value={"Event"}>Event</option>
          <option value={"Call for Registration"}>Call for Registration</option>
          <option value={"Recruitment"}>Recruitment</option>
          <option value={"Ambassador Update"}>Ambassador Update</option>
        </select>

        <div className="news-details">
          <Editor
            editorState={this.state.editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
            placeholder="Write News Details Here"
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
          onClick={this.handleCreateNews.bind(this)}
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
          {!this.state.laoding && "Create News"}
          {this.state.laoding && "Creating News..."}
        </button>
      </div>
    );
  }
}

export default News;
