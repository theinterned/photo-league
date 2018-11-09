import React from 'react';
import {Router} from "@reach/router";
import Users from './users';
import Albums from './albums';
import Photos from './photos';
import {userAlbumListUrl, userAlbumUrl} from 'app/urls';

const App = props => <> 
  <Router> 
    <Users path="/"/> 
    <Albums path={userAlbumListUrl} />
    <Photos path={userAlbumUrl}/>
  </Router> 
</>;

export default App;