import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBed, faCalendar, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'

import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'

function Header({type}) {
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);
    
  const [openDate, setOpenDate] = useState(false)
  function toggleOpenDate(){
    setOpenDate((prevOpendate)=>{
      return !prevOpendate

    })
  }

  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adults: 3,
    children: 1,
    rooms: 3
  })

  function handleOption(name, operation){
    setOptions(prevOptions => {
        return {
          ...prevOptions,
          [name]: operation === 'i' ? options[name] +1 : options[name] -1
        
        
        }
    })
  }
  const navigate = useNavigate()
  const handleSearch = ()=>{
    navigate('/hotels', {state:{destination, date, options}})

  }
  return (
    <div className='header'>
      <div className={type=='list' ? "headerContainer listMode": 'headerContainer'}>
        <div className="headerList">

          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>

        </div>
        <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
        <p className='headerDesc'>Get rewarded for your travels - unlock instant savings of 10% or more with a free Lucky Book account.</p>
        <button className="headerButton">
          Sign in / Register
        </button>
        {type !== 'list' && <div className="headerSearch">
          
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
            <input type="text" placeholder='Where are you going?' className='headerSearchInput' value={destination} onChange={(e)=>{setDestination(e.target.value)}} />
          </div>
        
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendar} className="headerIcon"/>
            <span onClick={toggleOpenDate} className='headerSearchText'>{`${format(date[0].startDate,"dd/MM/yyyy")} to  ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date'
              minDate={new Date()}
            />}
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
            <span  className='headerSearchText' onClick={()=>{setOpenOptions((prevOpenOptions=>{return !prevOpenOptions}))}}>{ `${options.adults} ${options.adults === 1 ? 'adult' : 'adults'} ${options.children} ${options.children === 1 ? 'child' : 'children'} ${options.rooms} ${options.rooms === 1 ? 'room' : 'rooms'}` }</span>
              {openOptions && <div className="options">

                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton" disabled={options.adults <= 1} onClick={()=>{handleOption('adults', 'd')}}>-</button>
                  <span className="optionCounterNumber">{options.adults}</span>
                  <button className="optionCounterButton" onClick={()=>{handleOption('adults', 'i')}}>+</button>
                  </div>
                </div>

                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton" disabled={options.children <= 0} onClick={()=>{handleOption('children', 'd')}}>-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button className="optionCounterButton" onClick={()=>{handleOption('children', 'i')}}>+</button>
                  </div>
                </div>

                <div className="optionItem">
                  <span className="optionText">Rooms</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton" disabled={options.rooms <= 1} onClick={()=>{handleOption('rooms', 'd')}} >-</button>
                  <span className="optionCounterNumber">{options.rooms}</span>
                  <button className="optionCounterButton" onClick={()=>{handleOption('rooms', 'i')}} >+</button>
                  </div>
                </div>

              </div>}
          </div>
          <div className="headerSearchItem">
           <button className="headerButton" onClick={handleSearch}>Search</button>
          </div>
        </div>}
      </div>

    </div>
  )
}

export default Header