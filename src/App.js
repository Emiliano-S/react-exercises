import React from 'react';
import { Welcome } from './Welcome';



export class App extends React.Component{
    onLoginData = (state) =>{
        console.log(state)
    }
    render(){
        return(
            <div>
                <Welcome name='Jimmy' age={20}/>
            </div>
        );
    };
};