import React from 'react';
import PropTypes from 'prop-types';


class Login extends React.Component {
  static contextTypes = {
    conn: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props);
    this.state = {
      username: "",
      password: "",
      rememberme: true
    };
    this.conn = context.conn;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const cb = this.handleResponse.bind(this);
    this.conn.login(this.state.username, this.state.password, { rememberme: this.state.rememberme }, cb);
    return;
  }

  handleResponse(resp) {
    console.log("Have login response!");
    console.log(resp);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
            <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Password:
            <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Remember me?:
            <input
            name="rememberme"
            type="checkbox"
            checked={this.state.rememberme}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}


class NewUser extends React.Component {
  static contextTypes = {
    conn: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props);
    this.state = {
      username: "",
      password: "",
      rememberme: true
    };
    this.conn = context.conn;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const cb = this.handleResponse.bind(this);
    const options = { rememberme: this.state.rememberme };
    this.conn.newuser(this.state.username, this.state.password, options, cb);
    return;
  }

  handleResponse(resp) {
    console.log("Have login response!");
    console.log(resp);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
            <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Password:
            <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Remember me?:
            <input
            name="rememberme"
            type="checkbox"
            checked={this.state.rememberme}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default { Login, NewUser };
