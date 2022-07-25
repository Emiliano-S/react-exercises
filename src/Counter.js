import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state = {
        counter: this.props.initialValue ?? 0,
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState((state) =>{
                return{
                    counter: state.counter + this.props.incrementAmount ?? 1
                }
            })
        },this.props.incrementInterval ?? 1000);
    }

    render(){
        return <CounterDisplay counter = {this.state.counter} />
    }

}