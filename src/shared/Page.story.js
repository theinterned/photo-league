import React from 'react';
import { storiesOf } from '@storybook/react';
import Page, {Loading, Error} from './Page';

storiesOf('Page', module)
  .add('Page', () => (
    <Page 
      title="my title"
      apiUrl="https://test.com/foo"
    >{() => <p>Page contents</p>}</Page>
  ))
  .add('error', () => (
    <Error />
  ))
  .add('loading', () => (
    <Loading />
  ))