import React from 'react';

class Greet extends React.Component {
  state = {
    message: 'webpack is awesome!',
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.message}!</h1>
      </div>
    );
  }
}

export default Greet;