import React from "react";


export class ClickTracker extends React.Component{
    state = {
        lastButton: 'No one button was clicked'
    }

    buttonClickEvent = (event) =>{
        this.setState({
            lastButton: event.target.name
        })
    }

    render(){
        return(
            <div>
                <h1>The last button pressed was: {this.state.lastButton}</h1>
                <button name='Button 1' onClick={this.buttonClickEvent}>Button 1</button>
                <button name='Button 2' onClick={this.buttonClickEvent}>Button 2</button>
                <button name='Button 3' onClick={this.buttonClickEvent}>Button 3</button>
            </div>
        )
    }
}


