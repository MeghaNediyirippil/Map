import React, { useState, useEffect } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { historyAddAPI, historyFetchAPI } from '../../services/Allapi';

const PlacesSearch = () => {
  const [address, setAddress] = useState('');
  const [userId, setUserId] = useState(localStorage.getItem('userid'));

  // const [allHistory,setAllHistory]=useState()

  const handleChange = address => {
    setAddress(address);
  };

  const handleSelect = address => {
    setAddress(address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
  const handleAddhistory=async()=>{
    if(address){
      const historyDetails={
        userId,
        searchKeyword:address
      }
      const result=await historyAddAPI(historyDetails)

      if(result.data){
        alert("history added!!")
      }else{
        console.log(result.response.data);
      }
    }else{
      alert("please type search!!")
    }
  }

  // const historyFetch=async()=>{
  //   const result=await historyFetchAPI(userId)
  //   console.log(result);
  //   if(result.data){
  //     setAllHistory(result.data)
  //   }else{
  //     alert(result.response.data)
  //   }
  // }
  // useEffect(()=>{
  //  if(userId){
  //   historyFetch()
  //  }
  // },[userId])
  // console.log(allHistory);
  // console.log(userId);
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}
          />
          <button className='btn btn-outline bg-light ms-3' onClick={handleAddhistory}>SEARCH</button>
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  key={suggestion.placeId} // Added key for list item
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default PlacesSearch;
