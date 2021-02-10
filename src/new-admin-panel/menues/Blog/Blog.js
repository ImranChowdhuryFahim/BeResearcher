import React, { Component } from "react";
import "./Blog.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToMarkdown from "draftjs-to-markdown";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laoding: false,
      title: null,
      catagory: "Research",
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
  handleBlogTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleBlogCatagory(event) {
    this.setState({ catagory: event.target.value });
  }
  handleCreateBlogPost() {
    const content = this.state.editorState.getCurrentContent();
    const rawObject = convertToRaw(content);
    const markdownString = draftToMarkdown(rawObject);
    const d = new Date();
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "numeric" }).format(d);


    if (this.state.title === null) {
      window.alert("Please enter the blog title.");
    } else {
      let Blog = {
        title: this.state.title,
        catagory: this.state.catagory,
        body: '# '+this.state.title+' \n #### '+`${mo}${' '}${da}${', '}${ye}`+' by '+`[${this.state.authorName}]`+'(/) \n' + markdownString,
        authorName: this.state.authorName,
        createdAt: d,
      };
      this.setState({ laoding: true });
      console.log(Blog)

      axios
        .post(
          "https://beresearcherbd.herokuapp.com/api/blog/create-blog-post",
          Blog
        )
        .then((Result) => {
          setTimeout(() => {
            this.setState({ laoding: false });
          }, 2000);
          console.log(Blog);
          window.alert("Successfully created a new blog post.")
        })
        .catch((err)=>{
          setTimeout(() => {
            this.setState({ laoding: false });
          }, 2000);
          window.alert("Oops! Failed to create a new blog post.")
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
      <div className={"create-blog"}>
        <h1 className={"heading_name"}>Blog Title</h1>
        <input
          type="text"
          placeholder="e.g. How to write a research paper"
          onChange={this.handleBlogTitle.bind(this)}
        ></input>

        <h1 className={"heading_name"}>Choose Catagory</h1>
        <select onChange={this.handleBlogCatagory.bind(this)}>
          <option value={"Research"}>Research</option>
          <option value={"Research Methodology"}>Research Methodology</option>
          <option value={"Research Basic"}>Research Basic</option>
          <option value={"Paper Writing"}>Paper Writing</option>
          <option value={"Paper Writing Guidelines"}>
            Paper Writing Guidelines
          </option>
          <option value={"Higher Study Guidelines"}>
            Higher Study Guidelines
          </option>
          <option value={"Research Talks"}>Research Talks</option>
          <option value={"Research Webinar"}>Research Webinar</option>
          <option value={"Idea Series"}>Idea Series</option>
        </select>

        <div className="blog_write">
          <Editor
            editorState={this.state.editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
            placeholder="Write Here"
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
          onClick={this.handleCreateBlogPost.bind(this)}
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
          {!this.state.laoding && "Create Blog Post"}
          {this.state.laoding && "Creating Blog Post..."}
        </button>
      </div>
    );
  }
}

export default Blog;
