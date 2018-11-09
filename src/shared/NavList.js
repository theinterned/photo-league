import styled from 'styled-components';
import {Box} from 'rebass';

export const NavList = styled(Box)`
   text-indent: 0;
   list-style-type: none;
   flex-wrap: wrap;
`;

NavList.defaultProps = {
  as: 'ul',
  m: 0,
  p: 0,
  width: 1
}

export const NavItem = styled(Box)`
  ${({theme}) => `
    border-bottom: 1px solid;
  `}
`;

NavItem.defaultProps = {
  as: 'li',
  width: 1,
  py: 3
}