import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';
import { albums } from './mocks';

storiesOf('Albums/List', module)
  .add('renders a list of albums', () => (
    <List albums={albums} />
  ));