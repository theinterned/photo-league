import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      error: false,
      loading: true,
    }
  }

  async componentDidMount() {
    const {url} = this.props;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({data, error: false, loading: false});
    } catch (error) {
      this.setState({data: undefined, error, loading: false,})
    }
  }

  render() {
    const {loading, error, data} = this.state;
    const {children} = this.props;
    return <> {
      typeof children === 'function' && children({data, error, loading})
    } </>
  }
}

Request.PropTypes = {
  children: PropTypes.func,
  url: PropTypes.string.isRequired,
}