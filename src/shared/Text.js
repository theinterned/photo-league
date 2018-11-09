import styled from 'styled-components';
import {Heading} from 'rebass';

export const Title = styled(Heading)``;

Title.defaultProps = {
  fontSize: [5],
  as: 'h1'
}

export const Subtitle = styled(Heading)``;

Subtitle.defaultProps = {
  fontSize: [4],
  as: 'h2'
}