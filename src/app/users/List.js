import React from 'react';
import PropTypes from 'prop-types';
import {NavList, NavItem} from 'shared/NavList';
import {makeUserAlbumListUrl} from '../utils/urls';

const List = ({users}) => <NavList>{users.map(({id, name}) => 
  <NavItem to={makeUserAlbumListUrl(id)} key={`user_${id}`}>{name}</NavItem>
)}</NavList>;

List.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }))
};

export default List;