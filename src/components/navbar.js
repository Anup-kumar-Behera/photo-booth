import React, { Component } from 'react'

export default class navbar extends Component {
    render() {
        return (
            <div className="d-flex">
            <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
                <div className="container-fluid">
                <a className="navbar-brand mx-auto" href="#"><h2 style={{color:"black"}}>DigiPics</h2></a>
                </div>
            </nav>
            </div>
        )
    }
}
