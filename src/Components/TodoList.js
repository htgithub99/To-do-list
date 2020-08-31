import React, { Component } from 'react'
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { entries, deleteItem, updateItem } = this.props;
    return (
      <div className="web_wrap---right" >
        <div className="header_top">
          <h4>To Do List</h4>
          {
            entries.map( (item) => {
              return (
                <TodoItem item={item} deleteItem={deleteItem} updateItem={updateItem}/>
              )
            })
          }
        </div>
     </div>
    )
  }
}

export default TodoList