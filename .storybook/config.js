import { configure } from '@storybook/react';
import '../src/index.css';

global.fetch = () => new Promise((resolve, reject) => {
  resolve({
    ok: true, 
    json: () => ({data: 'data'}),
  });
});


const req = require.context(
  '../src', // path where stories live
  true, // recursive?
  /\.story.js$/ // story files match this pattern
);

function loadStories() {
  req.keys().forEach(module => req(module));
}

configure(loadStories, module);
