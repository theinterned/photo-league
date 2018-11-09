import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Flex, Box} from 'rebass';

const Figure = styled('figure')`
  padding: 0;
  margin: 0;
`;

const Figcaption = styled('figcaption')`
  max-width: 150px;
`;

const Picture = ({title, thumbnailUrl}) => <Figure>
  <img src={thumbnailUrl} alt={`${title}`}/>
  <Figcaption>{title}</Figcaption>
</Figure>;

Picture.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const Item = styled(Box)``;

Item.defaultProps = {
  as: 'li',
  p: 3
}

const List = styled(Flex)`
  text-indent: 0;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: space-between;
`;

List.defaultProps = {
  as: 'ul',
  m: 0,
  p: 0,
  width: 1
}


const PhotoList = ({photos}) => <List>{photos.map(({thumbnailUrl, id, title}) => 
  <Item key={`photo_${id}`}><Picture title={title} thumbnailUrl={thumbnailUrl} /></Item>
)}</List>;

List.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape(Item.propTypes))
};

export default PhotoList;