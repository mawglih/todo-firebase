import React from 'react';
import { connect } from 'react-redux';
import { logoutTodo } from 'actions';

import styles from './Logout.css';

const LogoutButton = (props) => (
  <div
    className={styles.logout}
    onClick={()=>props.logoutTodo()}
  >
    Logout
  </div>
);

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth.loggedIn, 
  };
};

export default connect(mapStateToProps, { logoutTodo })(LogoutButton);