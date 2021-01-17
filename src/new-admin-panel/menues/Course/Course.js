import React, { Component } from 'react'
import './Course.css'

class Course extends Component{
    constructor(props) {
        super(props);
        this.state = {
          CourseContent: {
            1: [{ type: 'lecture' }],
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
        newContent[unit][newContent[unit].length]={
            type:'lecture'
        }
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
      handleAddAssignment(event){
        let unit=event.target.getAttribute('data-key')
        let newContent=this.state.CourseContent
        newContent[unit][newContent[unit].length]={
            type: 'assignment'
        }
        this.setState({CourseContent: newContent})
      }
      handleAddQuiz(event)
      {
        let unit=event.target.getAttribute('data-key')
        let newContent=this.state.CourseContent
        newContent[unit][newContent[unit].length]={
            type: 'quiz'
        }
        this.setState({CourseContent: newContent})
      }
    
      handleCreate()
      {
        console.log(this.state.CourseContent)
      }
      handledelete(event){
        let unit,id;
        unit=event.target.getAttribute('data-unit')
        id=event.target.getAttribute('data-id')
        let newContent=this.state.CourseContent
        newContent[unit].splice(id,1)
        this.setState({CourseContent: newContent})
        id--;

      }
      handleDeleteUnit(event)
      {
        let unit;
        unit=event.target.getAttribute('data-unit')
        let newContent=this.state.CourseContent
        delete newContent[unit];
        this.setState({CourseContent: newContent})
      }
    render()
    {
        let id=0;
        let lec=0;
        let assignment=0;
        let quiz=0;
        return(
            <div className={"create-course"}>
                <div>
                   <h1 className={'heading_name'}>Course Title</h1> 
                   <input type="text" placeholder="e.g. Research Methodology"></input>
                </div>
                <div>
                  <h1 className={'heading_name'}>Course Description</h1> 
                  <textarea placeholder="Short Description"></textarea>
                </div>
                <div>
                    <h1 className={'heading_name'}>Course Curriculum</h1>
                    <div className={"course-curriculumn"}>

                    {Object.keys(this.state.CourseContent).map((unit) => {
          return (
            <div className={"unit-section"} key={unit}>
              
              <span style={{ fontWeight:'bold'}}>Unit {unit}</span>
              
                <div style={{display:'flex'}}>
                <button type="submit" data-key={unit} onClick={this.handleAddLecture.bind(this)} style={{ padding:'5px',margin:'5px', marginLeft:'10px' }}>Add Lecture</button>
                <button type='submit' data-key={unit} onClick={this.handleAddQuiz.bind(this)} style={{ padding:'5px',margin:'5px', marginLeft:'10px' }}>Add Quiz</button>
                <button type='submit' data-key={unit} onClick={this.handleAddAssignment.bind(this)} style={{ padding:'5px',margin:'5px', marginLeft:'10px' }}>Add assignment</button>
                </div>
                <div >

                
                {
                  this.state.CourseContent[unit].map((lecture,i)=> {
                    id++;
                    
                    console.log(lecture)
                    if(lecture.type==='lecture')
                    {
                        lec++;
                        return(
                        

                        <div key={id} className={'sections'}>
                            <div style={{ paddingBottom: '5px' }}>Lecture {lec}</div>
                            <div style={{ display: 'flex' , gridGap: '10px', fontSize:'14px'}}>
                           <div>Title <input data-unit={unit} data-id={i} data-rid={id} onChange={this.handletitle.bind(this)} placeholder={'e.g. Introduction'} style={{ padding:'10px', width:'100%'}}></input></div> 
                           <div>Source <input data-unit={unit} data-id={i} data-rid={id} onChange={this.handlesource.bind(this)} placeholder={'Youtube Link'} style={{ padding:'10px',width:'100%'}}></input></div>
                           </div>
                           <button data-unit={unit} data-id={i}  onClick={this.handledelete.bind(this)} style={{marginTop:'5px',padding:'5px'}}>Delete</button>
                        </div>
                               

                            
          
                              )
                    }
                    else if(lecture.type==='assignment')
                    {
                       assignment++;
                       return(
                        <div key={id} className={'sections'}>
                           <div style={{ paddingBottom: '5px' }}> Assignment {assignment} </div>
                           <div style={{ display: 'flex' , gridGap: '10px', fontSize:'14px'}}>
                          <span>Title <input data-unit={unit} data-id={i} data-rid={id} onChange={this.handletitle.bind(this)} placeholder={'e.g. Assignment1'} style={{ padding:'10px', width:'100%'}}></input></span>  
                          <span>  Description <input data-unit={unit} data-id={i} data-rid={id} onChange={this.handlesource.bind(this)} placeholder={'e.g. Assignment1'}  style={{ padding:'10px', width:'100%'}}></input></span>  
                            </div>
                            <button data-unit={unit} data-id={i}  onClick={this.handledelete.bind(this)} style={{marginTop:'5px',padding:'5px'}}>Delete</button>
                        </div>                       

                       )
                    }
                    else if(lecture.type==='quiz')
                    {
                       quiz++;
                       return(
                           <div key={id} className={'sections'}>
                               <div style={{ paddingBottom: '5px' }}> Quiz {quiz} </div>
                               <div>
                                   <span>Question <input data-unit={unit} data-id={i} data-rid={id} onChange={this.handletitle.bind(this)} placeholder={'e.g. What is the Capital of Bangladesh'} style={{ padding:'10px', width:'100%'}}></input></span>
                               </div>
                               <div style={{ display: 'flex' , gridGap: '10px', fontSize:'14px',paddingTop:'5px'}}>
                          <span>Option 1<input data-unit={unit} data-id={i} data-rid={id} onChange={this.handletitle.bind(this)} placeholder={'e.g. Dhaka'} style={{ padding:'10px', width:'100%'}}></input></span>  
                          <span>Option 2<input data-unit={unit} data-id={i} data-rid={id} onChange={this.handlesource.bind(this)} placeholder={'e.g. Chittagont'}  style={{ padding:'10px', width:'100%'}}></input></span> 
                          </div>
                          <div style={{ display: 'flex' , gridGap: '10px', fontSize:'14px',paddingTop:'5px'}}>
                          <span>Option 3<input data-unit={unit} data-id={i} data-rid={id} onChange={this.handletitle.bind(this)} placeholder={'e.g. Comilla'} style={{ padding:'10px', width:'100%'}}></input></span>  
                          <span>Option 4<input data-unit={unit} data-id={i} data-rid={id} onChange={this.handlesource.bind(this)} placeholder={'e.g. Barisal'}  style={{ padding:'10px', width:'100%'}}></input></span> 
                            </div>
                            <button data-unit={unit} data-id={i}  onClick={this.handledelete.bind(this)} style={{marginTop:'5px',padding:'5px'}}>Delete</button>
                           </div>
                       )
                    }
                    
                  })
                }
                                
              </div>
              

              <button data-unit={unit}   onClick={this.handleDeleteUnit.bind(this)} style={{marginTop:'5px',padding:'5px'}}>Delete</button>
            </div>
          );
        })}
        <button onClick={this.handleCreateUnit.bind(this)} className={'create-unit-button'}>Create Unit</button>
                    </div>
                </div>
                <input type="submit"></input>
            </div>
        )
    }
}

export default Course