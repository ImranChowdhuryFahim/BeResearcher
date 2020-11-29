import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose} from '@fortawesome/free-solid-svg-icons'

class CreateCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CourseContent: {
        1: [{}],
      },
    };
  }
  handleCreateUnit()
  {
    let newContent={}
    newContent[Object.keys(this.state.CourseContent).length+1]=[{}];
    this.setState({CourseContent: Object.assign(this.state.CourseContent,newContent)})
    // console.log(this.state.CourseContent)
  }

  handleAddLecture(event)
  {
    let unit=event.target.getAttribute('data-key')
    let newContent=this.state.CourseContent
    newContent[unit][newContent[unit].length]={}
    this.setState({CourseContent: newContent})

  }
  handletitle(event)
  {
    //  console.log(event.target.value)
     let unit,id,rid;
     unit=event.target.getAttribute('data-unit')
     id=event.target.getAttribute('data-id')
     rid=event.target.getAttribute('data-rid')
     let newContent=this.state.CourseContent
     newContent[unit][id]['id']=parseInt(rid)
     newContent[unit][id]['unit']=parseInt(unit)
     newContent[unit][id]['title']=event.target.value
     newContent[unit][id]['type']='lecture'
     this.setState({CourseContent: newContent})
     //console.log(this.state.CourseContent)
  }
  handlesource(event)
  {
    // console.log(event.target.value)
    let unit,id,rid;
     unit=event.target.getAttribute('data-unit')
     id=event.target.getAttribute('data-id')
     rid=event.target.getAttribute('data-rid')
     let newContent=this.state.CourseContent
     newContent[unit][id]['id']=parseInt(rid)
     newContent[unit][id]['unit']=parseInt(unit)
     newContent[unit][id]['src']=event.target.value
     newContent[unit][id]['type']='lecture'
     this.setState({CourseContent: newContent})
  }

  handleCreate()
  {
    console.log(this.state.CourseContent)
  }

  render() {

    let id=0;
    return (
      <div style={{margin: 'auto'}}>
        CourseTitle:
        <input ></input>
      <div className="create-course" style={{margin: 'auto',height: '500px',overflow: 'auto'}}>
        
        {Object.keys(this.state.CourseContent).map((unit) => {
          return (
            <div key={unit}>
              
              <h4>Unit {unit}</h4>
              
              
                <button type="submit" data-key={unit} onClick={this.handleAddLecture.bind(this)} >add lecture</button>
                <table style={{width: '600px'}}>
                <thead>
                  <tr>
                    <td>
                      Lecture No
                    </td>
                    <td>
                      Lecture Title
                    </td>
                    <td>
                      Source
                    </td>

                  </tr>
                </thead>
                <tbody>
                {
                  this.state.CourseContent[unit].map((lecture,i)=> {
                    id++;
                    return(

                  <tr key={id}>
                    <td>
                      {id}
                    </td>
                    <td>
                      <input data-unit={unit} data-id={i} data-rid={id} onChange={this.handletitle.bind(this)}></input>
                    </td>
                    <td>
                      <input data-unit={unit} data-id={i} data-rid={id} onChange={this.handlesource.bind(this)}></input>
                    </td>

                  </tr>
                  

                    )
                  })
                }
                                </tbody>
              </table>
              

                
            </div>
          );
        })}
        <button onClick={this.handleCreateUnit.bind(this)}>create unit</button>
      </div>
      <button style={{marginLeft: '43%'}} onClick={this.handleCreate.bind(this)}>Create</button>
      </div>
    );
  }
}
export default CreateCourse;
