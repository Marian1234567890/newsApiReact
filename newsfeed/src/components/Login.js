import React, { Component } from "react";
import { MainWrapper, InputStyled, FormStyled, ButtonStyled } from "./layout";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginName: "",
      loginPass: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    let index = this.props.users.findIndex(
        item => item.name === this.state.loginName
      );
      this.props.users[index].passwort === this.state.loginPass &&
        this.setState(
          {
            id: this.props.users[index].id,
            user: this.props.users[index].name,
            loggedIn: true
          },
          () => {
            this.props.addPost({ loggedIn: true });
            this.props.addIndex({ id: this.state.id });
            localStorage.setItem("isloggedIn" , true)
          }
        );

  };

  loggoutAction = () => {
    this.setState(
      {
        loggedIn: false
      },
      () => {
        this.props.addPost({ loggedIn: false });
      }
    );
  };

  render() {
    return (
      <MainWrapper>
        {console.log(this.state, this.props)}
        {this.props.loggedIn !== true ? (
          <>
            <h2>Login</h2>
            <FormStyled onSubmit={this.handleSubmit}>
              <InputStyled
                type="text"
                onChange={this.handleChange}
                value={this.state.name}
                name="loginName"
              />
              <InputStyled
                type="password"
                onChange={this.handleChange}
                value={this.state.pass}
                name="loginPass"
              />
              <br />
              <ButtonStyled>Bestätigen</ButtonStyled>
            </FormStyled>
          </>
        ) : (
          <>
            <h2>Hallo {this.state.user}</h2>
            <ButtonStyled onClick={this.loggoutAction}>Logout</ButtonStyled>
          </>
        )}
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    users: state.persons,
    loggedIn: state.loggedIn,
    ID: state.ID
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: user => {
      dispatch({ type: "LOGIN", user: user });
    },
    addIndex: user => {
      dispatch({ type: "WRITEINDEX", id: user.id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
