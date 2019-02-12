// Component Code Goes Here
import React from 'react';

export default class Address extends React.Component {
  render() {
    return (
      <div className="address">
      {this.props.street}
      </div>
    )
  }
}
