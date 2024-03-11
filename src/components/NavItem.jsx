/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import styled from "styled-components";

const StyledNavItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 0.75rem;
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #e2dfd2;
  }

  &:nth-last-child(2) {
    margin-top: auto;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
  padding: 0.75rem;
  border-radius: 0.75rem;

  &.active {
    background-color: #e2dfd2;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    span {
      display: none;
    }
  }
`;

const NavItem = ({ link }) => {
  return (
    <StyledNavItem>
      <StyledNavLink to={link.path} activeClassName="active">
        <FeatherIcon icon={link.icon} size={18} />
        <span style={{ marginLeft: 10 }}>{link.label}</span>
      </StyledNavLink>
    </StyledNavItem>
  );
};

export default NavItem;
