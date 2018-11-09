import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "@reach/router"
import {makeUserAlbumsUrl} from '../utils/urls';

const Item = ({name, id}) => <li>
  <Link to={makeUserAlbumsUrl(id)}>{name}</Link>
</li>;

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

const List = ({users}) => <ul>{users.map(({id, name}) => <Item name={name} id={id} key={`user_${id}`}/>)}</ul>;

List.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(Item.propTypes))
};

export default List;