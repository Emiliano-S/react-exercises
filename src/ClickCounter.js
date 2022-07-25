import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class ClickCounter extends React.Component{
    state = {
        counter: this.props.initialValue ?? 0,
    }

    handleCounterIncrement = () =>{
        this.setState(state => {
            return {
                counter: state.counter + this.props.incrementAmount
            }
        })
    }

    render(){
        return (
        <div>
            <CounterDisplay counter = {this.state.counter} />
            <button onClick={this.handleCounterIncrement}>Increment</button>
        </div>
        )
    }
}