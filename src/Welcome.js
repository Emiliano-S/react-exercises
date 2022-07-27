import React from 'react';
import { Age } from './Age';
import { Container } from './Container';


export class Welcome extends React.Component{
    render(){
        return(
            <Container title="This is a title!">
                <p>Hello, {this.props.name}!</p>
                <Age age={this.props.age}/>
            </Container>
        )
    }
}