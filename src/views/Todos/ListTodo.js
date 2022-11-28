import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import {toast} from "react-toastify";
class ListTodo extends React.Component {

    state = {
        listTodo:[
            { id: "todo1", title: "do home work" },
            { id: "todo2", title: "do home work1" }
            
        ],
        editTodo: {}
    }
    
    addNewTodo = (todo) => {
        // let currentTodo = this.state.listTodo;
        // currentTodo.push(todo);
        this.setState({
            listTodo: [...this.state.listTodo, todo]
            // listTodo: currentTodo
        })
        toast.success("Wow so easy!")
    }
    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodo;
        // just get value from currentTodo diff parameter todo return
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodo: currentTodo
        })
        toast.info("Delete success Todo: " + todo.title)
    }
    handleEditTodo = (todo) => {
        let {listTodo, editTodo} = this.state;
        let isEmptyObs = Object.keys(editTodo).length === 0;
        //save
        if(isEmptyObs === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodo];
            let objIndex = listTodoCopy.findIndex(index => index.id === todo.id);
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodo : listTodoCopy,
                editTodo : ''
            })
            toast.success("Update success ")
            return;
        }
        //edit
        this.setState({
            editTodo : todo
        })
    }
    handleEditTodoChange=(event)=>{
        let editTodocopy = {...this.state.editTodo}
        editTodocopy.title = event.target.value
        this.setState({
            editTodo : editTodocopy
        })
    }
    render(){
        // let listTodo = this.state.listTodo;
        let {listTodo, editTodo} = this.state;
        let isEmptyObs = Object.keys(editTodo).length === 0;
        return(
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-todo-element">
                    { listTodo && listTodo.length > 0 && listTodo.map((item, index)=>{
                        return(
                            <div className="todo-child" key={item.id}>
                                {isEmptyObs === true 
                                ? 
                                    <span>{ index +1 } - { item.title }</span>
                                : 
                                <>
                                    { editTodo.id === item.id 
                                    ? 
                                        <span>
                                            { index +1 } - <input type="text"  value={ editTodo.title } 
                                            onChange={(event) => this.handleEditTodoChange(event)}
                                            />
                                        </span>
                                    :
                                    <span>{ index +1 } - { item.title }</span>
                                }
                                </>}
                                
                                <div>
                                    <button type="button" className="btn-edit" 
                                    onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObs === false &&  editTodo.id === item.id ? 'save' : 'edit'}
                                        </button>
                                    <button type="button" className="btn-delete"
                                    onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            </div>
                        )
                    }) }
                    
                </div>
            </div>
        )
    }
}
export default ListTodo;