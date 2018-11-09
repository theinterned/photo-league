import React from 'react';
import Page from 'shared/Page';
import {usersApi} from 'app/urls';
import List from './List';

const UsersPage = () => (
  <Page 
    title={<><span role="img" aria-label="woman">👩🏽‍💼</span> Users:</>} 
    apiUrl={usersApi}
  >{data => <List users={data}/>}</Page>
);

export default UsersPage;