import React from 'react';
import { Login } from './Login';


export class App extends React.Component{
    onLoginData = (state) =>{
        console.log(state)
    }
    render(){
        return(
            <div>
                <Login />
            </div>
        );
    };
};