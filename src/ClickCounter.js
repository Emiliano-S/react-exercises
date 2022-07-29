import { CounterDisplay } from "./CounterDisplay";
import { useCounter } from "./useCounter";



export function ClickCounter({initialValue = 0}){
    const {initialV, onIncrement, onDecrement, onReset} = useCounter(initialValue);

    return(
        <div>
            <CounterDisplay counter = {initialV} />
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
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