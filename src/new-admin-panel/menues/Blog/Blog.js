import React, { Component } from "react";
import "./Blog.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import axios from "axios";

class Blog extends Component {
  constructor(props)
    {
        super(props);
        this.state = {
            blog: {},
            editorState: EditorState.createEmpty(),
          };
    }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  handleBlogTitle(event) {
    let createBlog = this.state.blog;
    createBlog["title"] = event.target.value;
    this.setState({ blog: createBlog });
  }
  handleBlogCatagory(event) {
    let createBlog = this.state.blog;
    createBlog["catagory"] = event.target.value;
    this.setState({ blog: createBlog });
  }
  handleCreateBlogPost() {
    let createBlog = this.state.blog;
    createBlog["body"] = draftToHtml(
      convertToRaw(this.state.editorState.getCurrentContent())
    );
    this.setState({ blog: createBlog });
    console.log(this.state.blog);
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

        <input
          type="submit"
          className={"post-button"}
          value={"Create Blog Post"}
          onClick={this.handleCreateBlogPost.bind(this)}
        ></input>
      </div>
    );
  }
}

export default Blog;
