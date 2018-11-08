import React from 'react';
import PropTypes from 'prop-types';

const Item = ({name, id}) => <li>{name}</li>;

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const List = ({users}) => <ul>{users.map(({id, name}) => <Item name={name} id={id} key={`user_${id}`}/>)}</ul>;

List.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(Item.propTypes))
};

export default List;