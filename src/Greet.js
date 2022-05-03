import React from 'react';

class Greet extends React.Component {
  state = {
    message: 'webpack is awesome!!!',
    count: 0
  }

  increatement = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.message}!</h1>
        <button onClick={this.increatement}>{this.state.count}</button>
      </div>
    );
  }
}

export default Greet;