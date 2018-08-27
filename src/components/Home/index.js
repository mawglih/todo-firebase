import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from '../AddTodo';
import { Redirect } from 'react-router-dom';
import DisplayTodo from '../DisplayTodo';
import Layout from 'components/Layout';
import styles from './Home.css';


const Auth = () => {
  return(
    <Layout>
      <div className={styles.HomeDiv}>
        <AddTodo />
        <DisplayTodo />        
      </div>
    </Layout>
  );
}

class Home extends Component {
componentDidMount() {
  console.log('state of auth is: ', this.props.auth);
}
  renderRedirect = () => !this.props.auth ? (<Redirect to='/login'/>) : <Auth />
  render() { 
    return (
      <div>
        {this.renderRedirect()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.auth.loggedIn
  }
}

export default connect( mapStateToProps, null)(Home);