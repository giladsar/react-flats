import React, { Component } from 'react';
import flats from '../../data/flats';
import Flat from './flat';
class FlatsList extends Component {


  render() {
    return flats.map((flat) => {
      return <Flat key={flat.name} name={flat.name} image={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency} lat={flat.lat} lng={flat.lng}/>;
    });
  }
}

export default FlatsList;
