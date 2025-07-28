import React, { useState } from 'react'
import "./list.css"
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import { useLocation } from 'react-router-dom'
import {format} from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../component/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext';
import { useContext } from 'react';



const List = () => {

    
  // const location = useLocation()
  // const [destination, setDestination] = useState(location.state.destination);

  // const [date, setDate] = useState(location.state.date);

  // const [openDate, setOpenDate] = useState(false);

  // const [options, setOptions] = useState(location.state.options);

const location = useLocation();
const state = location.state || {}; // fallback to empty object

const [destination, setDestination] = useState(state.destination || "");
const [dates, setDates] = useState(state.dates || [{
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
}]);
const [openDate, setOpenDate] = useState(false);
const [options, setOptions] = useState(state.options || {
  adult: 1,
  children: 0,
  room: 1
});
const [min, setMin] = useState(undefined);
const [max, setMax] = useState(undefined);

const { dispatch } = useContext(SearchContext);

const handleClick = () => {
  dispatch({
    type: "NEW_SEARCH",
    payload: {
      city: destination,
      dates: dates,
      options: options,
    },
  });
  reFetch();
};


const {data, loading, error, reFetch} = useFetch(`/api/hotels?city=${destination}&min=${min || 0}&max=${max || 99999}`);
 
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="listTitle">Search</h1>
              <div className="listItem">
                <label> Destination</label>
                <input placeholder={destination}              type="text"/>

              </div>

              <div className="listItem">
                <label>Check-in Date</label>
                <span onClick={()=> setOpenDate(!openDate)}>
                {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && (<DateRange 
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />)}

              </div>
              <div className="listItem">
                <label>Options</label>
                <div className="listOptions">

                <div className="listOptionItem">
                  <span className="listOptionText">Min price <small> per night</small>
                  </span>
                  <input type="number" onChange={e=>setMin(e.target.value)} className='listOptionInput'/>
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Max price <small>per night</small>
                  </span>
                  <input type="number" onChange={e=>setMax(e.target.value)}className='listOptionInput'/>
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Adult
                  </span>
                  <input min={1} type="number" className='listOptionInput' placeholder={options.adult}/>
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Children
                  </span>
                  <input min={0} type="number" className='listOptionInput' placeholder={options.children}/>
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Room
                  </span>
                  <input min={1} type="number" className='listOptionInput' placeholder={options.room}/>
                </div>

                </div>
              </div>
             <button onClick={handleClick}>Search</button>
            </div>
            <div className="listResult">

              {loading ? "Loading" : <> 
              {data.map(item =>(
                <SearchItem item={item} key={item._id}/>
              ))}
           
        </>}
            </div>
          </div>
      </div>

    </div>
  )
}

export default List


