import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './locationsMap.css'

const containerClassName = 'map';

const center = {
  lat: 36.731,
  lng: -86.263
};

const texas = {
  lat: 30.43906679564009,
  lng: -97.66870297196242
};
const pennsylvania = {
  lat: 40.27102377751676,
  lng: -75.87182880768174
};
const massachusetts = {
  lat: 42.317823211455824,
  lng: -72.22436801002995
};

class LocationsMap extends Component {
  render() {
	return (
	  <LoadScript
		googleMapsApiKey={process.env.GATSBY_GOOGLEMAPSAPI_KEY}
	  >
		<GoogleMap
		  center={center}
		  zoom={4}
		  mapContainerClassName={containerClassName}
		>
		  { /* Child components, such as markers, info windows, etc. */ }
		  <>
			  <Marker position={texas}></Marker>
			  <Marker position={pennsylvania}></Marker>
			  <Marker position={massachusetts}></Marker>
		  </>
		</GoogleMap>
	  </LoadScript>
	)
  }
}

export default LocationsMap;