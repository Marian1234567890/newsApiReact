import styled from "styled-components";

export const Navigation = styled.div `
  height: 50px;
  background-color: #003a5a;
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
`;

export const NaviCntWrapper = styled.div`
max-width: 1200px;
margin: auto;
display: flex;
justify-content: end;
`;

export const MainWrapper = styled.div `
  max-width: 1200px;
  margin: 80px auto 10px auto;
  position: relative;
  z-index: 0;
  text-align: center;
`;

export const CardWrapper = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 40px;
  text-align: left;
  a{
    color: #000;
    text-decoration: none;
  }
`;

export const Card = styled.div `
  width: 100%;
  height: 100%;
  background-color: #eee;
  padding-bottom: 3%;
  transition: all ease 0.3s;
  cursor: pointer;
  position: relative;
  img {
    width: 100%;
    filter: grayscale(100%) opacity(0.9);
    transition: all ease 0.3s;
  }
  :hover {
    background-color: #ddd;
    img {
      filter: grayscale(10%);
    }
  }
`;

export const ImageWrapper = styled.div `
height: 200px;
overflow: hidden;
background-color: #ccc;
`;

export const ContentWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 3%;
  background-color: f2f2f2;
  h3 {
    line-height: 23px;
    margin: 12px 0 0 0;
    height: 69px;
    overflow: hidden;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  p {
    font-size: 90%;
  }
  .author {

  }
`;

export const CreatedByWrapper = styled.div `    
font-size: 60%;
font-weight: bold;
position: absolute;
bottom: 10px;
padding: 0 3%;
`;


export const InputStyled = styled.input`
padding: 10px 15px;
margin-bottom: 10px;
`;

export const ButtonStyled = styled.button`
padding: 10px;
border: none;
cursor: pointer;
transition: all ease 0.3s;
font-weight: bold;
letter-spacing: 0.3px;  
transform: perspective(1px) translateZ(0);
transition-property: color;
transition-duration: 0.3s;
: hover{
  color: #fff;
: before{
  transform: scaleX(1);
}};
:before{
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #003a5a;
    transform: scaleX(0);
    transform-origin: 50%;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

}`


export const FormStyled = styled.form`
display: flex;
flex-direction: column;
max-width: 400px;
margin: auto;
`;

export const SelectStyled = styled.select`
padding: 10px;
margin-bottom: 30px;
min-width: 250px;
`;

export const CheckboxNews = styled.div`
width: 20px;
position: absolute;
right: 6px;
bottom: 4px;
`;