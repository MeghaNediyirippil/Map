import React from 'react'
// import Map from '../MAP/Map';
import FullMap from '../FULLMAP/FullMap';
// import Place from '../PLACE/Place';
import PlacesSearch from '../PLACEAUTOCOMPLETE/PlacesAutocomplete';
import Header from '../HEADER/Header';
import Footer from '../FOOTER/Footer';


function HomePage() {
  return (
    <div>
      <div className="header">
        <Header/>
      </div>
      <div className="autoplace m-3">
        {/* <Place/> */}
        <PlacesSearch  apiKey="AIzaSyDtzvpfOfzHbMWgFsuMw98vr1qsUzfI6p4"/>
      </div>
      <div className="map">
        {/* <Map/> */}
        <FullMap/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage