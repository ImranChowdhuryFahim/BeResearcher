import React, { Component } from "react";

export const CourseContext = React.createContext();

export class CourseProvider extends Component {
    constructor()
    {
        super()
        this.state = {
            open: true
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
    }

  render() {
    return (
        <CourseContext.Provider>
            value={{
                Isopen : this.state.open,
                open: this.open.bind(this),
                close: this.close.bind(this)
            }}

        </CourseContext.Provider>
    );
  }
}
