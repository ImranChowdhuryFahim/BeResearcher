import React, { Component } from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
import './News.css'

class News extends Component{
  constructor(props)
    {
        super(props);
        this.state = {
          news: {},
            editorState: EditorState.createEmpty(),
          };
    }
      onEditorStateChange = (editorState) => {
        this.setState({
          editorState: editorState,
        });
      };
      handleNewsTitle(event) {
        let createNews = this.state.news;
        createNews["title"] = event.target.value;
        this.setState({ news: createNews });
      }
      handleNewsCatagory(event) {
        let createNews = this.state.news;
        createNews["catagory"] = event.target.value;
        this.setState({ news: createNews });
      }
      handleCreateNews() {
        let createNews = this.state.news;
        createNews["body"] = draftToHtml(
          convertToRaw(this.state.editorState.getCurrentContent())
        );
        this.setState({ news: createNews });
        console.log(this.state.news);
      }
    render()
    {
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
        return(
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
          <option value={"Course"}>
          Course
          </option>
          <option value={"Event"}>
          Event
          </option>
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

        <input
          type="submit"
          className={"post-button"}
          value={"Create News"}
          onClick={this.handleCreateNews.bind(this)}
        ></input>
      </div>
        )
    }
}

export default News