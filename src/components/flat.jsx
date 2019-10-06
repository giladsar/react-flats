import React, { Component } from 'react';

class Flat extends Component {

  select = () => {
    this.props.gotClicked(this.props.index);
  };

  render() {
    const styles = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.image})`
    };

    return (
      <div className="card " style={styles}>
        <div className="card-category">{this.props.price}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <button className="card-link" onClick={this.select} type="button" />
      </div>
    );
  }
}
 export default Flat;
