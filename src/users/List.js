import React from 'react';
import PropTypes from 'prop-types';

const List = ({users}) => <ul>{users.map(({id, name}) => <li key={`user_${id}`}>{name}</li>)}</ul>;

List.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, name: PropTypes.string.isRequired}))
};

export default List;