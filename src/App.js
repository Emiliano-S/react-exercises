import React from 'react';
import { Counter } from './Counter';
import { Hello } from './Hello';
import { Welcome } from './Welcome';

export class App extends React.Component{
    render(){
        return(
            <div>
                <Hello />
                <Welcome name="Jhon" age={27}/>
                <Counter />
            </div>
        );
    };
};