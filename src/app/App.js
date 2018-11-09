import React from 'react';
import {Router} from "@reach/router";
import Page from 'shared/Page';
import {UserList} from './users';
import {AlbumList} from './albums';
import {PhotoList} from './photos';
import {userAlbumListUrl, userAlbumUrl, usersApi, userAlbumsApi, albumPhotosApi} from './utils/urls';

const Users = () => (
  <Page 
    title={<><span role="img" aria-label="woman">👩🏽‍💼</span> Users:</>} 
    apiUrl={usersApi}
  >{data => <UserList users={data}/>}</Page>
);

const Albums = ({userId}) => (
  <Page 
    title={<><span role="img" aria-label="camera">📸</span> Albums:</>} 
    apiUrl={userAlbumsApi(userId)}
  >{data => <AlbumList albums={data} />}</Page>
);

const Album = ({albumId}) => (
  <Page 
    title={<><span role="img" aria-label="framed picture">🖼</span> Photos:</>} 
    apiUrl={albumPhotosApi(albumId)}
  >{data => <PhotoList photos={data} />}</Page>
);

const App = props => <> 
  <Router> 
    <Users path="/"/> 
    <Albums path = {userAlbumListUrl} />
    <Album path={userAlbumUrl}/>
  </Router> 
</>;

export default App;