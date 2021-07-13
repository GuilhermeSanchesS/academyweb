import styled from 'styled-components';

interface ContainerProps {
    tab: number,
    isOpen: boolean;
}

export const Header = styled.header`
  height: 88px;
  display: flex;
  box-shadow: inset 0 -1px 0 #29292e;
`;

export const Container = styled.div<ContainerProps>`
  z-index: 100;
  position: sticky;
  align-items: center;
  color: #FFFFFF;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  
  a {
    text-decoration: none;
    font-size: 16px;
    font-family: 'Raleway', Arial;
    text-align: center;
    line-height: 19px;
  }
  section {
    display: flex;
    align-items: center;
    margin-left: 115px;
  }
  
  nav {
    display: block;
  
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      li:nth-child(${(props): number => props.tab}) a {
        color: #64f4ac;
      }

      li {
        margin-left: 25px;
        transition: color 150ms ease;
      }
    }
  }

  @media (max-width: 1200px) {
    margin: 0;
    section {
      img{
        width: 180px;
        height: 34px; 
      }
    }
  }

  @media (max-width: 320px) {
    margin: 0 24px;
    section {
      img{
        width: 160px;
        height: 30px;
      }
    }
  }
`;

export const Access = styled.ul`
  display: flex;
  align-items: center;
  a{
    height: 100%;
    justify-content: center;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
  button {
    margin: 20px;
    border: 0;
    width: 5rem;
    height: 44px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
    border-radius: 5px;
    text-transform: uppercase;
    transition: all .3s ease;
  }
`;

export const MenuBar = styled.span`
  width: 30px;
  height: 3px;
  border-radius: 1px;
  display: block;
  transition: all 150ms;
`;

export const MenuIcon = styled.a<ContainerProps>`
  cursor: pointer;
  display: none;
  & ${MenuBar}:nth-child(1) {
    transform: ${(props): string =>
      props.isOpen ? 'rotate(45deg) translate3d(5px, 4px, 0)' : ''};
  }
  & ${MenuBar}:nth-child(2) {
    margin: 6px 0;
    opacity: ${(props): number => (props.isOpen ? 0 : 1)};
  }
  & ${MenuBar}:nth-child(3) {
    transform: ${(props): string =>
      props.isOpen ? 'rotate(-45deg) translate3d(9px, -8px, 0)' : ''};
  }
  @media (max-width: 320px) {
    display: block;
  }
`;