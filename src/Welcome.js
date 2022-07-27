import React from 'react';
import { Age } from './Age';
import './index.css';

export class Welcome extends React.Component{
    render(){
        return(
            <div className='welcome'>
                <p>Hello, {this.props.name}!</p>
                <Age age={this.props.age}/>
            </div>
        )
    }
}