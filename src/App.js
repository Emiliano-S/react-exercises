import React from 'react';
import { TodoList } from './TodoList';



export class App extends React.Component{
    onLoginData = (state) =>{
        console.log(state)
    }
    render(){
        return(
            <div>
                <TodoList />
            </div>
        );
    };
};