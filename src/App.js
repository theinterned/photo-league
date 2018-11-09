import React from 'react';
import {Router, Link} from "@reach/router";
import {UserList} from './users';
import {users, getUser} from './users/mocks';
import {AlbumList} from './albums';
import {albums} from './albums/mocks';
import {PhotoList} from './photos';
import {photos} from './photos/mocks';
import {userAlbumListUrl, userAlbumUrl} from './utils/urls';

const Users = () => <>
  <h1>👩🏽‍💼 Users</h1>
  <UserList users={users} /> 
</>;

const Albums = ({userId}) => {
  const {name} = getUser(userId);
  return <>
    <h1>📸 Albums:</h1>
    <AlbumList albums={albums} /> 
  </>;
}

const Album = ({userId, albumId}) => <>
  <h1>🖼 Photos:</h1>
  <PhotoList photos={photos} />
</>;

const App = props => <> 
  <h1><Link to="/">Home</Link></h1>
  <Router>
    <Users path="/"/>
    <Albums path={userAlbumListUrl}/>
    <Album path={userAlbumUrl}/>
  </Router> 
</>;

export default App;