import React from 'react';
import './index.css';
import { Sum } from './Sum';


export class App extends React.Component{


    render(){
        return(
            <div>
                <Sum numbers={[10,10,5,8]}/>
            </div>
        );
    };
};