import React from 'react';
import { ClickCounter } from './ClickCounter';

import './index.css';



export class App extends React.Component{


    render(){
        return(
            <div>
                <ClickCounter />
            </div>
        );
    };
};