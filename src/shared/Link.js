import React from 'react';
import styled from 'styled-components';
import {Link} from '@reach/router';

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;