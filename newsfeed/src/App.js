import React, { Component } from "react";
import { Navigation, NaviCntWrapper } from "./components/layout";
import { BrowserRouter, Route, NavLink as Nav } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";

import Home from "./components/Home";
import Login from "./components/Login";
import Feed from "./components/Feed";

const NavLink = styled(Nav)`
color: #fff
font-weight: bold;
font-size: 20px;
padding: 10px;
text-decoration: none;
`;

class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      articles: [],
      feedName: "general"
    };
  }

  componentDidMount() {
    this.getNews(this.state.feedName);
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.feedName !== this.state.feedName &&
      this.getNews(this.state.feedName);
  }

  getLocalStorage = () => {
    let storedData = JSON.parse(
      localStorage.getItem("feedData_" + this.state.feedName)
    );
    return storedData;
  };

  getNews(url) {
    this.getLocalStorage() === null
      ? axios
          .get(
            `https://newsapi.org/v2/top-headlines?country=de&category=${url}&pageSize=100&apiKey=17afaa6d3614443190ba6fe7ffca1836`
          )
          .then(res => {
            const articles = res.data.articles;

            this.setState({
              articles: articles,
              feedName: this.state.feedName
            });
            return res.data.articles;
          })
          .then(data => {
            let datatoSave = JSON.stringify(data);
            localStorage.setItem("feedData_" + this.state.feedName, datatoSave);
          })
          .catch(error => {
            console.log(error);
          })
      : this.setState({
          articles: this.getLocalStorage(),
          feedName: this.state.feedName
        });
  }

  changeTopic = event => {
    this.setState({ feedName: event.target.value });
  };

  render() {
    return (
      <BrowserRouter>
        <Navigation>
          <NaviCntWrapper>
            <NavLink to="">Startseite</NavLink>
            {this.props.loggedIn && <NavLink to="/feed">Meine News</NavLink>}
            <NavLink to="/login">
              {this.props.loggedIn ? "Logout" : "Login"}
            </NavLink>
          </NaviCntWrapper>
        </Navigation>
        <Route
          path="/"
          exact
          render={() => (
            <Home data={this.state} change={this.changeTopic}></Home>
          )}
        />
        <Route path="/login" exact component={Login} />
        <Route path="/feed" exact component={Feed} />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps)(App);
