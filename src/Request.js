import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      data: undefined
    }
  }

  async componentDidMount() {
    const {url} = this.props;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({loading: false, error: false, data});
    } catch (error) {
      this.setState({loading: false, data: undefined, error})
    }
  }

  render() {
    const {loading, error, data} = this.state;
    const {children} = this.props;
    return <> {
      typeof children === 'function' && children({loading, error, data})
    } </>
  }
}

Request.PropTypes = {
  children: PropTypes.func,
  url: PropTypes.string.isRequired,
}