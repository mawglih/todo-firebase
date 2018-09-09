import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators, compose } from 'redux';
import { addTodo } from 'actions';
import styles from './Addtodo.css';

const Todo = [
  'dry cleaning',
  'purchases',
  'sport',
  'leisure',
];

const renderSelectField = ({ input: { onChange, value }, options }) => (
  <select
    onChange={onChange}
    className={`${styles.input} ${styles.options}`}
    value={value}
  >
    {options.map(el => (
      <option
        key={el}
        value={el}
      >
        {el}
      </option>
    ))
    }
  </select>
);

class AddTodo extends Component {
  onSubmit = (formProps) => {
    console.log("formProps addTodo: ", formProps);
    this.props.addTodo(formProps);
  }
  render() {
    const {
      handleSubmit,
    } = this.props;
    return(
      <div>
        <form 
          className={styles.formTodo}
          onSubmit={handleSubmit(this.onSubmit)}
        >
          <Field
            className={styles.inputTodo}
            type="text"
            name="todo" 
            placeholder="Enter TODO title"
            component="input"
          />
          <Field
            className={styles.textTodo}
            type="text"
            name="textTodo" 
            component="textarea"
            placeholder="Enter TODO text"
            rows="10"
            cols="50"
          />
          <Field
            className={styles.inputDate}
            type="datetime-local"
            name="date"
            component="input"
          />
          <Field
            options={Todo}
            name="todo2"
            component={renderSelectField}
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
  }
}

export default compose(
  connect(null, { addTodo }),
  reduxForm({
    form: 'addTodo',
  })
)(AddTodo);
