import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';
import { photos } from './mocks';

storiesOf('Photos/List', module)
  .add('renders a list of photos', () => (
    <List photos={photos} />
  ));