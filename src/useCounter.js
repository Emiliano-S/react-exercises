import { useCallback, useEffect, useState } from "react";

export function useCounter({initialValue = 0}){
    const [initialV, setValue] = useState(initialValue);

    const handleCounterIncrement = useCallback(function handleCounterIncrement(){
        setValue(val => val + 1);
    },[])

    const handleCounterDecrement = useCallback(function handleCounterDecrement(){
        setValue(val => val - 1);
    },[])

    const handleCounterReset = useCallback(function handleCounterReset(){
        setValue(initialValue);
    },[initialValue])

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