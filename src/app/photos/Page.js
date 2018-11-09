import React from 'react';
import Link from 'shared/Link';
import Page from 'shared/Page';
import {albumPhotosApi, makeUserAlbumListUrl} from 'app/urls';
import List from './List';

const PhotosPage = ({albumId, userId}) => (
  <Page 
    title={<><span role="img" aria-label="framed picture">🖼</span> <Link to="/">Users</Link> / <Link to={makeUserAlbumListUrl(userId)}>Albums</Link> / Photos:</>} 
    apiUrl={albumPhotosApi(albumId)}
  >{data => <List photos={data} />}</Page>
);

export default PhotosPage;