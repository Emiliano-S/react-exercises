import React from 'react';
import './index.css';
import { Welcome } from './Welcome';

export class App extends React.Component{
    onLoginData = (state) =>{
        console.log(state)
    }
    render(){
        return(
            <div>
                <Welcome />
            </div>
        );
    };
};