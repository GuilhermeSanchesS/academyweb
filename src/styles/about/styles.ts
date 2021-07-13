import styled from 'styled-components';

export const Cards = styled.div`
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;
  div{
      margin: 3px;
        /*h3{
            text-align: left;
            margin: 1.5rem;
            font-size: 1.5rem;
        }
        h3::before{
            content: '';
            position: absolute;
            width: 10%;
            height: 3px;
            background-color: blue;
        }*/
        p{
            background-color: #263238;
            color: #FFFFFF;
            padding: 20px 46px;
        }
  }
`;

export const Sponsors = styled.div`
  justify-content: center;
  align-items: center;
  a{
      height: 12.5rem;
      width: 12.5rem;
      margin: 3px;
      border-radius: 5px;
      border: none;
      float: left;
      display: inline-block;
      text-align: center;
      font-size: 26px;
  }
  a img{
      max-height: 12rem; 
      max-width: 12rem;
      vertical-align: middle;
      -webkit-filter:  opacity(1);
      -webkit-transition: all 1s ease-in-out;
  }
  a:hover img{
      -webkit-filter: grayscale(1) opacity(0.3);
  }
  
`;

export const SponsorContainer = styled.div`
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1{
      text-align: center;
      margin: 3rem;
      font-size: 2rem;
  }
  h1::before{
      content: '';
      position: absolute;
      bottom: -2rem;
      left: 43%;
      width: 15%;
      height: 3px;
      background-color: blue;
  }
`;