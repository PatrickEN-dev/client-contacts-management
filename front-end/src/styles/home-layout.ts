import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f4f8;
  font-family: Arial, sans-serif;
`;

export const Header = styled.header`
  background-color: #2a4365;
  padding: 12px 24px;
  width: 100%;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-right: 20px;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 1.6rem;
        font-weight: bold;
        transition: opacity 0.2s ease-in-out;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export const Content = styled.div`
  margin-top: 40px;
`;

export const Footer = styled.footer`
  background-color: #2a4365;
  padding: 12px 24px;
  width: 100%;
  color: #fff;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #2a4365;
  margin-bottom: 20px;
`;

export const Separator = styled.hr`
  margin: 40px 0;
  border: none;
  height: 1px;
  background-color: #d2d6dc;
`;

export const Link = styled.a`
  color: #4299e1;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #3182ce;
  }
`;
