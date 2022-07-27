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

    removeToDo = (event) =>{
        const todoToRemove = event.target.name;
        this.setState(state =>{
            return state.todos.splice(todoToRemove,1);
        })
    }

    render(){
        return(
            <div>
                <div>
                    {this.props.render(this.state.todos, this.removeToDo)}
                </div>
                <div>
                    <input name='todoInput' value={this.state.newTodos.title} onChange={this.handleInputTodo} />
                    <button type="submit" onClick={this.submitNewTodo} disabled={this.state.newTodos.title  ? false : true}>Add todo</button>
                    <button type="button" onClick={this.resetTodo} disabled={this.state.todos.length > 0 ? false : true}>Reset todo</button>
                </div>
            </div>
        )
    }
}