import React, {Component} from 'react';

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
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      this.setState({ 
        loading: false,
        error: false,
        data,
      });
    }
    catch(error) {
      this.setState({
        loading: false,
        data: undefined,
        error,
      })
    }
  }

  render() {
    const {loading, error, data} = this.state;
    return <> {
      this
        .props
        .children({loading, error, data})
    } </>
  }
}