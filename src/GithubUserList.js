import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUserList (){
    const [array, setArray] = useState([])
    const [inputValue, setInputvalue] = useState("")


    const handleInput = (event) =>{
        setInputvalue(event.target.value)
    }

    const handleSubmit = (event) =>{
        setArray([...array, inputValue])
    }

    return(
        <div>
            <ul>
                {array.map((value, index) => (
                    <li key={value+index}><GithubUser username={value} /></li>
                ))}

            </ul>
            <input onChange={handleInput} name="username" />
            <button onClick={handleSubmit}>Add user</button>
        </div>
    )
}