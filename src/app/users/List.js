import React from 'react';
import PropTypes from 'prop-types';
import {NavList, NavItem} from 'shared/NavList';
import {makeUserAlbumListUrl} from '../utils/urls';

const Item = ({name, id}) => <NavItem to={makeUserAlbumListUrl(id)}>{name}</NavItem>;

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

const List = ({users}) => <NavList>{users.map(({id, name}) => <Item name={name} id={id} key={`user_${id}`}/>)}</NavList>;

List.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(Item.propTypes))
};

export default List;