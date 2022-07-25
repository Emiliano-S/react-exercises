import React from 'react';
import { ClickCounter } from './ClickCounter';
import { Hello } from './Hello';
import { Welcome } from './Welcome';

export class App extends React.Component{
    render(){
        return(
            <div>
                <Hello />
                <Welcome name="Jhon" age={27}/>
                <ClickCounter incrementAmount = {2} initialValue = {10} incrementInterval = {500} />
            </div>
        );
    };
};