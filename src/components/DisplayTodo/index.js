import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from 'actions';
import moments from 'moment';
import styles from './Display.css';

const DisplayTodo = (props) => (
  <div className={styles.todoDiv}>

    <div className={styles.todoUl}>
      {
        props.todos.map(el => {
          return (
            <div key={el.id} className={styles.todoLi}>
              <h2 className={styles.todoTitle}>{el.text1}</h2>
              <h4
                className={styles.dueDate}
              >
                <span>Date due: </span>
                {moments(new Date(el.date)).fromNow()}
              </h4>
              <p className={styles.todoText}>{el.text2}</p>
              <div
                onClick={()=>props.deleteTodo(el.id)}
                className={styles.deleteButton}
              >
                &#x2715;
              </div>
            </div>
          );
        })
      }        
    </div>
  </div>
);
  const mapStateToProps = state => {
    return {
      todos: state.todos.data,
    }
  }
  
  export default connect(mapStateToProps, { deleteTodo })(DisplayTodo);