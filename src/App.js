import React from 'react';
import {Router, Link} from "@reach/router";
import Request from './Request';
import {UserList} from './users';
import {AlbumList} from './albums';
import {albums} from './albums/mocks';
import {PhotoList} from './photos';
import {photos} from './photos/mocks';
import {userAlbumListUrl, userAlbumUrl, usersApi} from './utils/urls';

const Loading = () => <div>
  <span role="img" aria-label="hourglass">⏳</span>
  Loading ...</div>;

const Error = error => <div>
  <span role="img" aria-label="fire">🔥</span>
  {error.message}
  <span role="img" aria-label="fire">🔥</span>
</div>

const Users = () => <> 
  <h1>👩🏽‍💼 Users</h1> 
  <Request url={usersApi}>{
  ({data, error, loading}) => {
    console.log(data);
    if (loading) return <Loading/>;
    if (error) return <Error error={error} />;
    return <UserList users={data}/>;
  }
  }</Request>
</>;

const Albums = ({userId}) => <> 
  <h1>📸 Albums:</h1> 
  <AlbumList albums={albums} /> 
</>;

const Album = ({userId, albumId}) => <> 
  <h1>🖼 Photos:</h1> 
  <PhotoList photos={photos} />
</>;

const App = props => <> 
  <h1><Link to="/">Home</Link></h1> 
  <Router> 
    <Users path="/"/> 
    <Albums path = {userAlbumListUrl} />
    <Album path={userAlbumUrl}/>
  </Router> 
</>;

export default App;