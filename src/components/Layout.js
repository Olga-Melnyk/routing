import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: orangered;
  }
`;

export const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <StyledLink to="/">Домашня</StyledLink>
          </li>
          <li>
            <StyledLink to="/dogs">Колекція</StyledLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
