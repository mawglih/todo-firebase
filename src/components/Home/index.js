import React, { Component } from 'react';
import AddTodo from '../AddTodo';
import DisplayTodo from '../DisplayTodo';
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div className={styles.HomeDiv}>
        <AddTodo />
        <DisplayTodo />        
      </div>
    );
  }
}

export default Home;