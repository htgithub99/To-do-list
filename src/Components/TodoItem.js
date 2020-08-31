import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  render() {
    const {item} = this.props

    const handleUpdateItem = () => {
      const taskTitle = this.refs.reftitle.value;
      const taskDesc = this.refs.refdesc.value;
      const taskDate = this.refs.refdate.value;
      const taskPior = this.refs.refpior.value;
      const todo = {
        id: item.id,
        title: taskTitle,
        description: taskDesc,
        date: taskDate,
        piority: taskPior
      }
      this.props.updateItem(todo);
    }

    return (
      <div key={item.id}>
        <div className="list_text" >
          <div className="list_text---left">
              <span><i class="fa fa-check-square-o" aria-hidden="true"></i></span>
              <h5>{item.title}</h5>
          </div>
          <div className="list_text---right">
            <div className="detail_button">
                <button onClick={() => this.setState({active: !this.state.active})}>Detail</button>
            </div>
            <div className="remove_button">
                <button onClick={() => this.props.deleteItem(item.id)}>Remove</button>
            </div>
        </div>
        </div>
        {/* //form detail */}
        <form className={this.state.active ? "content display-block" : "content hide-block"}>
          <div className="top_content">
            <input type="text" defaultValue={item.title} name="title" ref="reftitle"/>
          </div>
          <div className="center_content">
            <label>Description</label>
            <textarea rows="10" cols="100%" defaultValue={item.description} ref="refdesc" required></textarea>
          </div>
          <div className="bottom_content">
            <div className="bottom_content---left">
            <label>Due date</label>
            <div className="icon_input">
              <input type="date" defaultValue={item.date} ref="refdate"></input>
            </div>
            </div>
            <div className="bottom_content---right">
              <label>Piority</label>
              <select ref="refpior" defaultValue={item.piority}>
                <option>Normal </option>
                <option>Low</option>
                <option>High</option>
              </select>
            </div>
          </div>
          <div className="button_content">
            <button type="submit" onClick={() => handleUpdateItem()}>Update</button>
          </div>
        </form>
      </div>
    )
  }
}


export default TodoItem;