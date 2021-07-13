import styled from 'styled-components';

export const Footeres = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #121214;
  font-weight: normal;
  font-size: 12px;
`;

export const Container = styled.div`
  flex-direction: column;
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

export const Content = styled.div`
  display: flex;
  justify-content: space-between;


  @media (min-width: 992px) {
    flex-direction: row;
    padding: 80px 0;
  }

  @media (min-width: 320px) {
    flex-direction: column;
    padding: 64px 0;
  }
  
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  span{
    text-align: left;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
  @media (min-width: 992px) {
    img{
      width: 256px;
      margin-bottom: 50px;
    }
  }

  @media (min-width: 576px) {
    span{
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media (min-width: 320px) {
    width: 224px;
    height: auto;
    margin-bottom: 24px;
    span{
      font-size: 13px;
      line-height: 23px;
    }
  }
`;

export const Right = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 639px;
  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 36px;
    color: #E1E1E6;
  }

  li{
    display: flex;
    a {
      font-size: 16px;
      line-height: 36px;
      color: #A8A8B3;
    }
    a:hover {
      color: #1B26FF;
    }
  }

  @media (min-width: 992px) {
    margin: unset;
    display: flex;
    justify-content: space-between;
    grid-template-columns: unset;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 576px) {
    li{
      a {
        font-size: 16px;
        font-weight: 400;
        line-height: 36px;
      }
    }
  }

  @media (min-width: 320px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 64px;
    li{
      a {
        padding: 0;
        font-size: 12px;
        line-height: 35px;
      }
    }
  }
`;

export const Bottom = styled.div`
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #202024;
    transition: all .3s ease;
    cursor: pointer;
  }

  @media (min-width: 375px) {
    button {
      width: 48px;
      height: 48px;
    }
  }

  @media (min-width: 320px) {
    button {
      width: 44px;
      height: 44px;
    }
  }
`;
export const Buttom = styled.button`

`;

export const SocialMedia = styled.div`
  grid-gap: 8px;
  gap: 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: all .3s ease;
    background: #202024;
    a {
      display: flex;
      justify-content: center;
      flex-direction: column;
      @media (min-width: 375px) {
        padding: 10px;
      }

      @media (min-width: 320px) {
        padding: 8px;
      }
    }
  }
`;