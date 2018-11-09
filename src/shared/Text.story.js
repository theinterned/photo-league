import React from 'react';
import { storiesOf } from '@storybook/react';
import loremIpsum from 'lorem-ipsum';
import {Title, Subtitle} from './Text';

const phrase = () => loremIpsum({ sentenceUpperBound: 5 })

storiesOf('Text/all', module)
  .add('phrases', () => (<>
    <Title>{phrase()}</Title>
    <Subtitle>{phrase()}</Subtitle>
  </>));