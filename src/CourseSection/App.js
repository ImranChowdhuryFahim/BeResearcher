import React, { Component } from 'react'
import Header from './Header/Header'
import Sidebar from './SideBar/Sidebar'
import VideoPlayer from './VideoPlayer/VideoPlayer'

class App extends Component {

    constructor()
    {
        super()
        this.state = {
            open: true,
            Ismobile: false,
            myref : React.createRef()
        }
    }
    close()
    {
        this.setState({open: false})
        console.log(this.state.open)
    }
    open()
    {
        this.setState({open: true})
        console.log(this.state.open)
    }
    toggole()
    {
        this.setState({open: !this.state.open})
        console.log(this.state.open)
    }

    updateDimensions = () => {
        if(window.innerWidth<=800){
            this.close()
            this.setState({Ismobile: true})
        }
        else{
            this.open()
            this.setState({Ismobile: false})
        }
      }
      componentDidMount() {
        console.log(this.props.match.params)
        if(window.innerWidth<=800){
            this.close()
            this.setState({Ismobile: true})
        }
        else{
            this.open()
            this.setState({Ismobile: false})
        }
        window.addEventListener('resize', this.updateDimensions);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }
    render() {
        return (
            <div className="CourseSection">
                <Header toggole={this.toggole.bind(this)}></Header>
                <Sidebar Isopen={this.state.open} id={this.props.match.params.ContentId}  open={this.open.bind(this)} Ismobile={this.state.Ismobile} rf={this.state.myref} close={this.close.bind(this)}></Sidebar>
                <VideoPlayer rf={this.state.myref} id={this.props.match.params.ContentId} ></VideoPlayer>
            </div>
        )
    }
}

export default App