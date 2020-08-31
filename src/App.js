import React, { Component } from 'react'
import './App.css'
import NewTodo from './Components/NewTodo';
import TodoList from './Components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 1,
          title: "taskTitle1",
          description: "taskDesc",
          date: "taskDate",
          piority: "taskPior"
        },
        {
          id: 2,
          title: "taskTitle2",
          description: "taskDesc",
          date: "taskDate",
          piority: "taskPior"
        }
      ]
    }
  }

  // add new tab into todolist
  addItem = (item) => {
    const itemNew = { ...item, id: this.state.items.length }
    const items = [...this.state.items, itemNew]
    this.setState({
      items,
    },() => {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    })
  }

  updateItem = (itemUpdate) => {
    const items = this.state.items;
    items.map( (item,index) => {
      if(itemUpdate.id === item.id){
        items.splice(item.id,1,itemUpdate)
      }
    })
    this.setState({
      items,
    },() => {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    })
  }

  //delete item
  deleteItem = (idItem) => {
    const items = this.state.items
    items.forEach( (item,index) => {
      if(item.id == idItem) {
        items.splice(index,1)
      }
    });
    this.setState({items}, () => {
      localStorage.setItem('items', JSON.stringify(this.state.items))
    })
  }
  //lay tu localstorage
  componentDidMount() {
    const items = localStorage.getItem('items');
    if (items) {
      this.setState({ items: JSON.parse(items)});
    }
  }

  render() {
    return (
      <div>
        <div className="left_right">
          <NewTodo addItem={this.addItem} />
          <TodoList entries={this.state.items} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
        </div>
      </div>
    )
  }
}

export default App

