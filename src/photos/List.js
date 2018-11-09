import React from 'react';
import PropTypes from 'prop-types';

const Item = ({title, thumbnailUrl}) => <li>
  <figure>
    <img src={thumbnailUrl}/>
    <figcaption>{title}</figcaption>
  </figure>
</li>;

Item.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const List = ({photos}) => <ul>{photos.map(({thumbnailUrl, id, title}) => <Item title={title} thumbnailUrl={thumbnailUrl} key={`photo_${id}`}/>)}</ul>;

List.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape(Item.propTypes))
};

export default List;