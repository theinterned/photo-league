import React from 'react';
import PropTypes from 'prop-types';
import {Router, Link} from "@reach/router";
import Request from 'shared/Request';
import {Title, Subtitle} from 'shared/Text';
import {UserList} from './users';
import {AlbumList} from './albums';
import {PhotoList} from './photos';
import {userAlbumListUrl, userAlbumUrl, usersApi, userAlbumsApi, albumPhotosApi} from './utils/urls';

const Loading = () => <div>
  <span role="img" aria-label="hourglass">⏳</span>{" "}
  Loading ...</div>;

const Error = error => <div>
  <span role="img" aria-label="fire">🔥</span>{" "}
  {error.message}{" "}
  <span role="img" aria-label="fire">🔥</span>{" "}
</div>

const Page = ({ title, apiUrl, children}) => <>
  <Title>{title}</Title> 
  <Request url={apiUrl}>{
  ({data, error, loading}) => {
    if (loading) return <Loading/>;
    if (error) return <Error error={error} />;
    return children(data);
  }
  }</Request>
</>;

Page.propTypes = {
  title: PropTypes.node,
  apiUrl: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
}

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
    title={<><span role="img" aria-label="framed picture">🖼</span> Albums:</>} 
    apiUrl={albumPhotosApi(albumId)}
  >{data => <PhotoList photos={data} />}</Page>
);

const App = props => <> 
  <Subtitle><Link to="/">Home</Link></Subtitle> 
  <Router> 
    <Users path="/"/> 
    <Albums path = {userAlbumListUrl} />
    <Album path={userAlbumUrl}/>
  </Router> 
</>;

export default App;