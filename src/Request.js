import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Request extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.state = {
      data: undefined,
      error: false,
      loading: true,
    }
  }

  async fetch() {
    const {url} = this.props;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({data, error: false, loading: false});
    } catch (error) {
      this.setState({data: undefined, error, loading: false,})
    }
  }

  componentDidMount() {
    return this.fetch();
  }

  componentDidUpdate(prevProps) {
    const {url} = this.props;
    if(url !== prevProps.url) {
      return this.fetch();
    }
  }

  render() {
    const {data, error, loading} = this.state;
    const {children} = this.props;
    return <> {
      typeof children === 'function' && children({data, error, loading})
    } </>
  }
}

Request.propTypes = {
  children: PropTypes.func,
  url: PropTypes.string.isRequired,
}