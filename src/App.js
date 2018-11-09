import React from 'react';
import {Router, Link} from "@reach/router";
import UserList from './users/List';
import {users, getUser} from './users/mocks';
import {userAlbumsUrl} from './utils/urls';

const Users = () => <>
  <h1>Users</h1>
  <UserList users={users} /> 
</>;

const Albums = ({userId}) => {
  const {name} = getUser(userId);
  return <h1>{name} - Albums</h1>;
}

const App = props => <> 
  <h1><Link to="/">App</Link></h1>
  <Router>
    <Users path="/"/>
    <Albums path={userAlbumsUrl}/>
  </Router> 
</>;

export default App;