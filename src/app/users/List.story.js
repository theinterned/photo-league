import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';
import { users } from './mocks';

storiesOf('Users/List', module)
  .add('renders a list of users', () => (
    <List users={users} />
  ));