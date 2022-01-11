import React from "react";
import Validator from "validatorjs";
import "./style.css";

const Input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        type={type}
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
      <br />
    </div>
  );
};

const ShowErrors = ({ errors }) => {
  return (
    <ul className="errors">
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};

class RegistrationForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    errors: [],
  };
  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state);
    const { username, email, password } = this.state;

    let data = { username, email, password };
    let rules = {
      username: "required",
      email: "required|email",
      password: "min:8|required",
    };
    let validation = new Validator(data, rules);
    if (validation.passes()) {
      alert(`
    username : ${this.state.username}
    email : ${this.state.email}
    password : ${this.state.password}`);
    } else {
      this.setState({
        errors: [
          ...validation.errors.get("username"),
          ...validation.errors.get("email"),
          ...validation.errors.get("password"),
        ],
      });
    }
  };
  render() {
    return (
      <div className="form-content">
        {this.state.errors && <ShowErrors errors={this.state.errors} />}
        <h4>Sign up</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Input
              type="text"
              name="username"
              label="Username"
              placeholder="Enter your username"
              onChange={(value) => this.setState({ username: value })}
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              onChange={(value) => this.setState({ email: value })}
            />
          </div>
          <div>
            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              onChange={(value) => this.setState({ password: value })}
            />
          </div>
          <br />
          <br />
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
