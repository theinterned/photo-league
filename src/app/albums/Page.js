import React from 'react';
import Link from 'shared/Link';
import Page from 'shared/Page';
import {userAlbumsApi} from 'app/urls';
import List from './List';

const AlbumsPage = ({userId}) => (
  <Page 
    title={<><span role="img" aria-label="camera">📸</span> <Link to="/">Users</Link> / Albums:</>} 
    apiUrl={userAlbumsApi(userId)}
  >{data => <List albums={data} />}</Page>
);

export default AlbumsPage;