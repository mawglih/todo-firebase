import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from 'actions';
import moments from 'moment';
import styles from './Display.css';

class DisplayTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: '',
    }
  }
  render() {
    return(
      <div className={styles.todoDiv}>
      <input type="text" onChange={(e) => this.setState({ filtered: e.target.value})} />
        <div className={styles.todoUl}>
          {
            this.props.todos ?
            this.props.todos.filter(todo => todo.option.includes(this.state.filtered))
            .map(el => {
              return (
                <div key={el.id} className={styles.todoLi}>
                  <h2 className={styles.todoTitle}>{el.text1}</h2>
                  <h4
                    className={styles.dueDate}
                  >
                    <span>Date due: </span>
                    {moments(new Date(el.date)).fromNow()}
                  </h4>
                  <h5>
                    <span>Type of Todo: </span>
                    {el.option}
                  </h5>
                  <p className={styles.todoText}>{el.text2}</p>
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
      

const mapStateToProps = state => {
  return {
    todos: state.todos.data,
  }
}

export default connect(mapStateToProps, { deleteTodo })(DisplayTodo);