import React, { Component } from 'react';
import FlatsList from './flats-list';
import Marker from './marker';
import GoogleMapReact from 'google-map-react';
import flats from '../../data/flats';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0]
    };
  }

  gotClicked = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  };

  center = () => {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatsList gotClicked={this.gotClicked}/>
        </div>
        <div className="map-container">

          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={this.center()}
            defaultZoom={12}
          >
          <Marker
            lat={this.state.selectedFlat.lat}
            lng={this.state.selectedFlat.lng}
          />
          </GoogleMapReact>

        </div>
      </div>
    );
  }
}

export default App;
