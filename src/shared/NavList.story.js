import React from 'react';
import { storiesOf } from '@storybook/react';
import loremIpsum from 'lorem-ipsum';
import {NavList, NavItem} from './NavList';

const phrase = () => loremIpsum({ sentenceUpperBound: 5 });
const data = (count = 5, template = phrase) => Array.apply(null, {length: count}).map(
  (_, i) => template(i)
);

storiesOf('NavList', module)
  .add('default', () => (<>
    <NavList>{data().map(d => <NavItem>{d}</NavItem>)}</NavList>
  </>));