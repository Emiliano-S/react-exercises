import React, { useState } from "react";

export function Login(){
    const [data, setData] = useState({username:'', password: '', remember: false})


    function handleInputChange(event){
        const {name, type, value, checked} = event.target;

        setData((data) => {
            return{
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }
    console.log(data);
    return(
        <form>
            <input name='username' value={data.username} onChange={handleInputChange}/>
            <input name='password' value={data.password} type="password" onChange={handleInputChange} />
            <input name='remember' checked={data.remember} type="checkbox" onChange={handleInputChange} />
        </form>
    )
}

// export class Login extends React.Component{
//     state = {
//         username: '',
//         password: '',
//         remember: false
//     }

//     handleInputChange = (event) =>{
//         const name = event.target.name;
//         const value = event.target.value;
//         const checked = event.target.checked;
//         const type = event.target.type;

//         this.setState({
//             [name]: type === "checkbox" ? checked : value
//         })
//     }

//     onLogin = () =>{
//         this.props.data(this.state);
//     }

//     resetInput = () =>{
//         this.setState({
//             username: '',
//             password: '',
//             remember: false
//         })
//     }

//     render(){
//         const PasswordColorButton ={
//             background: this.state.password.length < 8 ? "red" : "green"
//         }

//         return(
//            <div>
//                 <h1>Login</h1>
//                 <div>
//                     <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
//                     <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
//                     <input type="checkbox" name="remember" checked={this.state.checked} onChange={this.handleInputChange} />
//                     <button type="submit" style={PasswordColorButton} disabled={(this.state.username === '' || this.state.password === '') ? true : false} onClick={this.onLogin}>Login</button>
//                     <button type="reset" onClick={this.resetInput} >Reset</button>
//                 </div>
//             </div>
//         )
//     }

// }