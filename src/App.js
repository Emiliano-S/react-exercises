import React from 'react';
import './index.css';
import { TodoList } from './TodoList';


export class App extends React.Component{
    onLoginData = (state) =>{
        console.log(state)
    }
    render(){
        return(
            <div>
                <TodoList render = {(todoList, removeTodo) => {
                       return( todoList.map((todos, index) => (
                        <ul>
                            <li key={todos.id}>
                                {todos.title}
                                <button type="button" name = {index} key={"TodoButton" + todos.id} onClick={removeTodo}>Remove</button>
                            </li>
                        </ul>)))
                }}></TodoList>
            </div>
        );
    };
};