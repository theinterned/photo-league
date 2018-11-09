import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "@reach/router"

const Item = ({title, id}) => <li>
  <Link to={`${id}`}>{title}</Link>
</li>;

Item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

const List = ({albums}) => <ul>{albums.map(({id, title}) => <Item title={title} id={id} key={`albums_${id}`}/>)}</ul>;

List.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape(Item.propTypes))
};

export default List;