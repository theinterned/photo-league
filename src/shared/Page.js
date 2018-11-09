import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Box} from 'rebass';
import {Title} from 'shared/Text';
import Request from 'shared/Request';

export const Loading = () => <Box color="blue" px={3}>
  <span role="img" aria-label="hourglass">⏳</span>{" "}
  Loading ...
</Box>;

export const Error = error => <Box color="red" px={3}>
  <span role="img" aria-label="fire">🔥</span>{" "}
  {error.message || "An error has occured"}{" "}
  <span role="img" aria-label="fire">🔥</span>{" "}
</Box>;

const Layout = styled('div')`
  display: grid;
  grid-template-rows: [header] 4rem [main] 1fr;
  height: 100vh;
  width: 100vw;
`;

const Header = styled('header')`
  grid-row: header;
  border-bottom: 2px solid blue;
`;

const Main = styled(Box)`
  gird-row: main;
  overflow: auto;
`

Main.defaultProps = {
  as: 'main',
  py: 3
}

// const 

const Page = ({ title, apiUrl, children}) => <Layout>
  <Header>
    <Title px={3}>{title}</Title> 
  </Header>
  <Main>
    <Request url={apiUrl}>{
    ({data, error, loading}) => {
      if (loading) return <Loading/>;
      if (error) return <Error error={error} />;
      return children(data);
    }
    }</Request>
  </Main>
</Layout>;

Page.propTypes = {
  title: PropTypes.node,
  apiUrl: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
}

export default Page;