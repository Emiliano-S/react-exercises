import React from "react";

export function Sum({numbers = [1,2,3]}){
    return(
        <h1>{numbers.reduce((prevVal, currentVal) =>prevVal + currentVal)}</h1>
    );
}