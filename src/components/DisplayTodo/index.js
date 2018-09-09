import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from 'actions';
import moments from 'moment';
import  { firebaseApp } from 'firebaseApp';
import styles from './Display.css';

class DisplayTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filtered: '',
    }
  }
  componentDidMount() {
    const database = firebaseApp.database().ref('todos');
    const todos = database.once('value')
    .then((snapshot) => this.setState({
      todos: Object.values(snapshot.val())
    }))
    }
  render() {
    return(
      <div className={styles.todoDiv}>
      <input type="text" onChange={(e) => this.setState({ filtered: e.target.value})} />
        <div className={styles.todoUl}>
          {
            this.state.todos ?
            this.state.todos
            // .filter(todo => todo.option.includes(this.state.filtered))
            .map((el, index) => {
              return (
                <div key={index} className={styles.todoLi}>
                  <h2 className={styles.todoTitle}>{el.todo}</h2>
                  <h4
                    className={styles.dueDate}
                  >
                    <span>Date due: </span>
                    {moments(new Date(el.dueDate)).fromNow()}
                  </h4>
                  {/* <h5>
                    <span>Type of Todo: </span>
                    {el.option}
                  </h5> */}
                  <p className={styles.todoText}>{el.todoDescription}</p>
                  <div
                    onClick={()=>this.props.deleteTodo(el.id)}
                    className={styles.deleteButton}
                  >
                    &#x2715;
                  </div>
                </div>
              );
            }) : <h1>No todo items</h1>
          }        
        </div>
      </div>

    );
  }
}

export default connect(null, { deleteTodo })(DisplayTodo);
