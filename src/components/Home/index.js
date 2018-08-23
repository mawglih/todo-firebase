import React, { Component } from 'react';
import AddTodo from '../AddTodo';
import DisplayTodo from '../DisplayTodo';
import Layout from 'components/Layout';
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.HomeDiv}>
          <AddTodo />
          <DisplayTodo />        
        </div>
      </Layout>
    );
  }
}

export default Home;