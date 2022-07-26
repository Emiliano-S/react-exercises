import React from 'react';
import { UncontrolledLogin } from './UncontrolledLogin';


export class App extends React.Component{
    onLoginData = (state) =>{
        console.log(state)
    }
    render(){
        return(
            <div>
                <UncontrolledLogin />
            </div>
        );
    };
};