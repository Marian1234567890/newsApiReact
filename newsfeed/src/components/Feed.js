import React from "react";
import { connect } from "react-redux";

import {
  MainWrapper,
  CardWrapper,
  Card,
  ImageWrapper,
  ContentWrapper,
  CreatedByWrapper,
} from "./layout";


const Feed = (props) => {

  let data =  JSON.parse(localStorage.getItem("feedData_" + props.id))

  return (
    <MainWrapper>
      {data && (
        <CardWrapper>
          {data.map((news, i) => {
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
            
              </Card>
            );
          })}
        </CardWrapper>
      )}
    </MainWrapper>
  );
};

const mapStateToProps = (state, props) => {
    return {
      id: state.ID
    };
  };

export default connect(mapStateToProps)(Feed)
