import React, { Component } from 'react';
import FlatsList from './flats-list';
class App extends Component {






  render(){
    return (
      <div>
        <div className="flat-list">
          <FlatsList/>
        </div>
        <div>
           Map
        </div>
      </div>
    );
  }
}
 export default App;
