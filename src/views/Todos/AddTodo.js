import React from 'react';
import {toast} from "react-toastify";
class AddTodo extends React.Component {
    state = {
        title:''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddtodo = () => {
        if(!this.state.title){
            toast.error(`"Error you can enter a title"`)
            return;
        }
        let todo = {
            id: Math.floor(Math.random()*10000),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        // viếc 2 kiểu đều có tác dụng như nhau
         let title = this.state.title
        // let {title} = this.state;
        return(
            <div className="add-todo">
                <input type="text"  className='input-todo' value={title}  onChange={(event)=>this.handleOnChangeTitle(event)}/>
                <button type="button" className="btn-add" onClick={() => this.handleAddtodo()}>Add</button>
            </div>
        )
    }
}
export default AddTodo;