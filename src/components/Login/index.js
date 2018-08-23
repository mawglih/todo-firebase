import React from 'react';
import { connect } from 'react-redux';
import { loginTodo } from 'actions';
import Layout from 'components/Layout';
import styles from './Login.css';

const Login = (props) => (
  <Layout>
    <div className={styles.loginDiv}>
      <form 
        className={styles.formLogin}
        onSubmit={(e) => {
          e.preventDefault();
          let email = e.target.emailLogin.value;
          let password = e.target.passwordLogin.value;
          props.loginTodo(email, password);
      }}>
        <input
          className={styles.inputLogin}
          type="email"
          name="emailLogin" 
          placeholder="Enter your email"
          required
        />
        <input 
          className={styles.inputPassword}
          type="password"
          name="passwordLogin"
          placeholder="Enter your password"
          required
        />
        <button
          type="submit"
          className={styles.buttonLogin}
        >
          Sign In
        </button>
      </form>
      <div className={styles.loginText}>
        <h1>Please login to see Todo application</h1>
      </div>
    </div>
  </Layout>
);

export default connect(null,{ loginTodo })(Login);
