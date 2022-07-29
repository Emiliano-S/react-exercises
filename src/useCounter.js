import { useEffect, useState } from "react";

export function useCounter({initialValue = 0}){
    const [initialV, setValue] = useState(initialValue);

    function handleCounterIncrement(){
        setValue(val => val + 1);
    }

    function handleCounterDecrement(){
        setValue(val => val - 1);
    }

    function handleCounterReset(){
        setValue(initialValue);
    }

    const onCounterChange = (value) =>{console.log(value)}

    useEffect(()=>{
        onCounterChange(initialV);
    },[initialV])

    return{
        initialV: initialV,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset,
    }
}