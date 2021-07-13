import styled from 'styled-components';

export const Main = styled.main`
  display: block;

  hr {
    width: 100%;
    bottom: 0;
    height: 1px;
    background: linear-gradient(270deg, #323238, rgba(50, 50, 56, .25));
    position: absolute;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 88px);
  position: relative;

  @media screen and (min-width: 992px) {
    padding: unset;
  }

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    height: calc(100vh - 88px);
  }

  @media screen and (min-width: 576px) {
    padding-top: 366px;
  }

  @media screen and (min-width: 320px) {
    height: auto;
    padding: 260px 0 86px;
  }
`;

export const Container = styled.div`
  width: 1120px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1120px) {
    margin: 0;
  }

  @media (min-width: 320px) {
    margin: 0 24px;
  }
`;

export const ImageMobile = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 320px) {
    left: 0;
    top: 32px;
    position: absolute;
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  span{
    color: #2823EB;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
  }
  h1{
    font-family: Open Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 60px;
    letter-spacing: -0.015em;
    max-width: 580px;
    margin-bottom: 24px;
  }
  p {
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.015em;
  }
  @media (min-width: 576px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  top: 0;
  left: 50%;
  bottom: 0;
  align-items: center;
  position: absolute;
  @media (min-width: 992px) {
    display: none;
  }

  @media screen and (min-width: 320px) {
    display: flex;
  }
`;

export const Button = styled.div`
  border: 0;
  weight: 100%;
  height: 64px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  text-align: center;
  border-radius: 5px;
  background-color: #2823EB;
  text-transform: uppercase;
  transition: all .3s ease;
  a{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
`;
