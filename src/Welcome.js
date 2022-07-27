import React from 'react';
import { Age } from './Age';
import { Container } from './Container';


export class Welcome extends React.Component{
    render(){
        return(
            <Container>
                <p>Hello, {this.props.name}!</p>
                <Age age={this.props.age}/>
            </Container>
        )
    }
}