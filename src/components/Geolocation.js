import React, { Component } from 'react'

class Geolocation extends Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        });
      }
    render() {
        return (
            <div>
              <h1>This is Geolocation</h1>
            </div>
        )
    }
}
export default Geolocation