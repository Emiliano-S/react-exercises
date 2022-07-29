import React from 'react';
import './index.css';
import { Welcome } from './Welcome';


export class App extends React.Component{


    render(){
        return(
            <div>
                <Welcome name="Emiliano" age={27} />
            </div>
        );
    };
};