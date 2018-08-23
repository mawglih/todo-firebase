import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from 'actions';
import styles from './Addtodo.css';

const AddTodo = (props) => (
  <div>
    <form 
      className={styles.formTodo}
      onSubmit={(e) => {
        e.preventDefault();
        let input = e.target.todo.value;
        let textInput = e.target.textTodo.value;
        let dateInput = e.target.date.value;
        props.addTodo(input, textInput, dateInput);
    }}>
      <input
        className={styles.inputTodo}
        type="text"
        name="todo" 
        placeholder="Enter TODO title"
      />
      <textarea
        className={styles.textTodo}
        type="text"
        name="textTodo" 
        placeholder="Enter TODO text"
        rows="10"
        cols="50"
      />
      <input 
        className={styles.inputDate}
        type="datetime-local"
        name="date"
      />
      <button
        type="submit"
        className={styles.buttonTodo}
      >
        Add TODO
      </button>
    </form>
  </div>
);
const mapDispatchToProps = dispatch => {
  return bindActionCreators ({
    addTodo
  }, dispatch);
};

const mapStateToProps = state => {
  return {
    todos: state.todos.data,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
