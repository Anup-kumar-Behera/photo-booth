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
            </div>
        )
    }
}
export default Geolocation