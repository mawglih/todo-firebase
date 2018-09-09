import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Layout from 'components/Layout';
import {
  signupStart,
} from 'actions';


class Signup extends Component {
  onSubmit = (formProps) => {
    console.log('formProps: ', formProps);
    this.props.signupStart(formProps);
  }

  render(){    
    const {
      handleSubmit,
    } = this.props;

    return(
      <Layout>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <label>Email</label>
            <div>
              <Field 
                name="email"
                type="text"
                component="input"
                placeholder="Email"
                autoComplete="none"
              />
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <Field 
                name="password"
                type="password"
                component="input"
                placeholder="Password"
                autoComplete="none"
              />
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Layout>
    );
  }
}

export default compose(
  connect(null, {signupStart}),
  reduxForm({
    form: 'signup',
  })
)(Signup);
