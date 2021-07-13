import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import NoCrazy from './NoCrazy.jsx'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact bootstrapURLKeys={{ key: '' }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <NoCrazy lat={52.233333} lng={21.016667} text='HELLO WORLD' />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
