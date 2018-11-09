import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "@reach/router"
import {makeUserAlbumUrl} from '../utils/urls';

const Item = ({title, userId, id}) => <li>
  <Link to={makeUserAlbumUrl(userId, id)}>{title}</Link>
</li>;

Item.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

const List = ({userId, albums}) => <ul>{albums.map(({id, title}) => <Item title={title} id={id} userId={userId} key={`albums_${id}`}/>)}</ul>;

List.propTypes = {
  userId: PropTypes.number.isRequired,
  albums: PropTypes.arrayOf(PropTypes.shape(Item.propTypes))
};

export default List;