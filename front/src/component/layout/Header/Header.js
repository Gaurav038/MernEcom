import styled from "styled-components";
import {Link} from "react-router-dom";
import img from "../../../images/club22.png"

const Navbar = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/">
            <img src={img} alt="" />
          </Link>
        </Logo>
       
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <Link to="/">
              <i className="fas fa-home fa-2x"></i>
                <span>Home</span>
              </Link>
            </NavList>

            <NavList>
              <Link to="/products">
                <i className="fas fa-home fa-2x"></i>
                <span>Products</span>
              </Link>
            </NavList>

            <NavList>
              <Link to="/contact">
              <i className="fas fa-home fa-2x"></i>
                <span>Contact</span>
              </Link>
            </NavList>

            <NavList>
              <Link to="/about">
              <i className="fas fa-home fa-2x"></i>
                <span>About</span>
              </Link>
            </NavList>

            <NavList>
              <Link to="/login">
              <i className="fas fa-home fa-2x"></i>
                <span>Login</span>
              </Link>
            </NavList>

          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  img{
      width:17rem;
  }
`;


const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    font-weight: 400;
    margin:0 1rem;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export default Navbar;