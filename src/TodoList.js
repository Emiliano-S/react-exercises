import React from "react";


export class TodoList extends React.Component{
    state = {
        todos: [{id: 1, title: "Comprare Latte"}],
        newTodos: {id: undefined, title: ""},
    }

    handleInputTodo = (element) =>{
        this.setState({newTodos: {id: (this.state.todos.length + 1), title: element.target.value}})
    }

    submitNewTodo = () =>{
        this.setState(state =>{
            return{
                todos: [...state.todos, state.newTodos],
                newTodos: {id: undefined, title: ""},
            }
        })

    }

    resetTodo = () =>{
        this.setState({
            todos: []
        })
    }

    render(){
        return(
            <div>
                <div>
                    <ul>
                        {this.state.todos.map((todos) => (
                            <li key={todos.id}>
                                {todos.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <input name='todoInput' value={this.state.newTodos.title} onChange={this.handleInputTodo} />
                    <button type="submit" onClick={this.submitNewTodo} disabled={this.state.newTodos ? false : true}>Add todo</button>
                    <button type="button" onClick={this.resetTodo} disabled={this.state.todos.length > 0 ? false : true}>Reset todo</button>
                </div>
            </div>
        )
    }
}