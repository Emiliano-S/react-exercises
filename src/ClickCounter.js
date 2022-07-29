import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";



export function ClickCounter({initialValue = 0}){
    const [initialV, setValue] = useState(initialValue);

    function handleCounterIncrement(){
        setValue(val => val + 1);
    }
    const onCounterChange = (value) =>{console.log(value)}

    useEffect(()=>{
        onCounterChange(initialV);
    },[initialV])

    return(
        <div>
            <CounterDisplay counter = {initialV} />
            <button onClick={handleCounterIncrement}>Increment</button>
         </div>
    )
}

// export class ClickCounter extends React.Component{
//     state = {
//         counter: this.props.initialValue ?? 0,
//     }

//     handleCounterIncrement = () =>{
//         this.setState(state => {
//             return {
//                 counter: state.counter + this.props.incrementAmount
//             }
//         })
//     }

//     render(){
//         return (
//         <div>
//             <CounterDisplay counter = {this.state.counter} />
//             <button onClick={this.handleCounterIncrement}>Increment</button>
//         </div>
//         )
//     }
// }