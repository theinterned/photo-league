import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Flex, Box} from 'rebass';
import Link from 'shared/Link';

const Figure = styled('figure')`
  padding: 0;
  margin: 0;
  max-width: 150px;
  transition: transform .1s ease-in;
  &:hover {
    color: blue;
    text-decoration: underline;
    transform: scale(1.05);
  }
`;

const ImgLink = styled('a')`
  display: block;
  text-decoration: none;
  color: inherit;
`

const Picture = ({title, url, thumbnailUrl}) => <Figure>
  <ImgLink href={url}><img src={thumbnailUrl} alt={`${title}`}/></ImgLink>
  <figcaption><ImgLink href={url}>{title}</ImgLink></figcaption>
</Figure>;

Picture.propTypes = {
  url: PropTypes.string.isRequired,
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


const PhotoList = ({photos}) => <List>{photos.map(({thumbnailUrl, id, url, title}) => 
  <Item key={`photo_${id}`}><Picture title={title} url={url} thumbnailUrl={thumbnailUrl} /></Item>
)}</List>;

List.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape(Item.propTypes))
};

export default PhotoList;