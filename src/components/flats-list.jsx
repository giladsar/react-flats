import React, { Component } from 'react';
import flats from '../../data/flats';
import Flat from './flat';

class FlatsList extends Component {
  render() {
    return flats.map((flat, index) => {
      return (<Flat
        key={flat.name}
        gotClicked={this.props.gotClicked}
        name={flat.name}
        image={flat.imageUrl}
        price={flat.price}
        priceCurrency={flat.priceCurrency}
        lat={flat.lat}
        lng={flat.lng}
        index={index} />
      );
    });
  }
}

export default FlatsList;
