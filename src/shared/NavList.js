import React from 'react';
import styled from 'styled-components';
import {Box} from 'rebass';
import {Link} from "@reach/router";

export const NavList = styled(Box)`
   text-indent: 0;
   list-style-type: none;
`;

NavList.defaultProps = {
  as: 'ul',
  m: 0,
  p: 0,
  width: 1
}

export const Item = styled(Box)`
  ${({theme}) => `
    
  `}
`;

Item.defaultProps = {
  as: 'li',
  width: 1,
}

const NavLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  padding: 1rem;
  color: black;
  border-bottom: 1px solid blue;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

export const NavItem = ({ children, to, ...props}) => <Item {...props}>
  <NavLink to={to}>{children}</NavLink>
</Item>;