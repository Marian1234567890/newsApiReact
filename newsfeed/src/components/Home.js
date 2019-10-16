import React, { Component } from "react";
import { connect } from "react-redux";

import {
  MainWrapper,
  CardWrapper,
  Card,
  ImageWrapper,
  ContentWrapper,
  CreatedByWrapper,
  NaviCntWrapper,
  SelectStyled,
  CheckboxNews
} from "./layout";

const categories = [
  "general",
  "sports",
  "science",
  "business",
  "entertainment",
  "health",
  "technology"
];

class Home extends Component {
  
  handleCheck = checkItem => {
    let oldData = JSON.parse(localStorage.getItem("feedData_" + this.props.id));
    let data = [];

    if (!oldData) {
      data.push(checkItem);
      localStorage.setItem("feedData_" + this.props.id, JSON.stringify(data));
    } else {
      oldData.push(checkItem);
      localStorage.setItem(
        "feedData_" + this.props.id,
        JSON.stringify(oldData)
      );
    }
  };

  render() {
    return (
      <MainWrapper>
        <NaviCntWrapper>
          <SelectStyled onChange={this.props.change}>
            {categories.map(category => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </SelectStyled>
        </NaviCntWrapper>
        {this.props.data.articles && (
          <CardWrapper>
            {this.props.data.articles.map((news, i) => {
              return (
                <Card key={i}>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    <ImageWrapper>
                      <img src={news.urlToImage} alt="" />
                    </ImageWrapper>
                  </a>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    <ContentWrapper>
                      <h3>{news.title}</h3>
                      <p>{news.description}</p>
                    </ContentWrapper>
                  </a>
                  <CreatedByWrapper>
                    Veröffentlicht bei: {news.source.name}
                  </CreatedByWrapper>
                  {this.props.loggedIn && (
                    <CheckboxNews>
                      <input
                        type="checkbox"
                        onChange={() => this.handleCheck(news)}
                      />
                    </CheckboxNews>
                  )}
                </Card>
              );
            })}
          </CardWrapper>
        )}
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    loggedIn: state.loggedIn,
    id: state.ID
  };
};

export default connect(mapStateToProps)(Home);
