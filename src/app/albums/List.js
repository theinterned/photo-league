import React from 'react';
import PropTypes from 'prop-types';
import {NavList, NavItem} from 'shared/NavList';

const List = ({albums}) => <NavList>{albums.map(({id, title}) => 
  <NavItem to={`${id}`} key={`album_${id}`}>{title}</NavItem>
)}</NavList>;

List.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }))
};

export default List;