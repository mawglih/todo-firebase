import React from 'react';
import { connect } from 'react-redux';
import { clearItems } from 'actions';
import moments from 'moment';
import Layout from 'components/Layout';
import styles from './Deleted.css';

const DisplayTodo = (props) => (
  <Layout>
    <div className={styles.todoDiv}>
      <h1>Deleted items:</h1>
      <div className={styles.todoUl}>
        {
          props.todos.map(el => {
            return (
              <div key={el.id} className={styles.todoLi}>
                <h2 className={styles.todoTitle}>{el.text1}</h2>
                <h4
                  className={styles.dueDate}
                >
                  <span>Was due: </span>
                  {moments(new Date(el.date)).fromNow()}
                </h4>
                <h5>
                    <span>Type of Todo: </span>
                    {el.option}
                  </h5>
                <p className={styles.todoText}>{el.text2}</p>
              </div>
            );
          })
        }        
      </div>
      <button
        className={styles.bigButton}
        onClick={props.clearItems}
      >
        Clear deleted items
      </button>
    </div>
  </Layout>

);
  const mapStateToProps = state => {
    return {
      todos: state.todos.deleted,
    }
  }
  
  export default connect(mapStateToProps, { clearItems })(DisplayTodo);