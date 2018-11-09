import { configure } from '@storybook/react';
import '../src/index.css';

const req = require.context(
  '../src', // path where stories live
  true, // recursive?
  /\.story.js$/ // story files match this pattern
);

function loadStories() {
  req.keys().forEach(module => req(module));
}

configure(loadStories, module);
