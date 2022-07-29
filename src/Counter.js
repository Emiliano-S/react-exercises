import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";


export function Counter({initialValue = 0, incrementAmount = 1, incrementInterval = 1000}){
    const [counter, setCounter] = useState(initialValue)

    useEffect(()=>{
        incrementCounter();

        return () => {
            clearInterval({incrementAmount})
        }
    },[])


    const incrementCounter = () =>{
            setInterval(()=>{
                setCounter((counter) => counter + incrementAmount)
            },incrementInterval)
    }

    return(
        <CounterDisplay counter = {counter} />
    )
}


// export class Counter extends React.Component{
//     state = {
//         counter: this.props.initialValue ?? 0,
//     }

//     componentDidMount(){
//         setInterval(()=>{
//             this.setState((state) =>{
//                 return{
//                     counter: state.counter + this.props.incrementAmount ?? 1
//                 }
//             })
//         },this.props.incrementInterval ?? 1000);
//     }

//     render(){
//         return <CounterDisplay counter = {this.state.counter} />
//     }

// }