import React from "react";


export class Login extends React.Component{
    state = {
        username: '',
        password: '',
        remember: false
    }

    handleInputChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;

        this.setState({
            [name]: type === "checkbox" ? checked : value
        })
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    <input type="checkbox" name="remember" checked={this.state.checked} onChange={this.handleInputChange} />
                </div>
            </div>
        )
    }

}