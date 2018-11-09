import React from 'react';
import Page from 'shared/Page';
import {albumPhotosApi} from '../utils/urls';
import List from './List';

const AlbumPage = ({albumId}) => (
  <Page 
    title={<><span role="img" aria-label="framed picture">🖼</span> Photos:</>} 
    apiUrl={albumPhotosApi(albumId)}
  >{data => <List photos={data} />}</Page>
);

export default AlbumPage;