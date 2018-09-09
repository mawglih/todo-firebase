import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutTodo } from 'actions'; 
import LogoutButton from 'components/Logout';
import styles from './Layout.css';

const Layout = (props) => {
  return(
    <Fragment>
      <div className={styles.navbar}>
        {props.auth ? <LoggedIn /> : <LogIn />}
      </div>
      {props.children}
    </Fragment>
  )
};

const LogIn = () => {
  return(
    <Fragment>
      <Link to="/login">
        Login
      </Link>
      <Link to="/signup">
        Sign Up
      </Link>
    </Fragment>
    
  );
}

const LoggedIn = () => {
  return(
    <Fragment>
    <div className={styles.logo}>
      <Link to="/">
        Todo Application
      </Link>
    </div>
    <div className={styles.links}>
      <LogoutButton />
      <Link to="/">
        Home
      </Link>
      <Link to="/deleted">
        Deleted
      </Link>
    </div>
  </Fragment>
  );
  
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth.loggedIn,
  }
}


export default connect(mapStateToProps, { logoutTodo })(Layout);