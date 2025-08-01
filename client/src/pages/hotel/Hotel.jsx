import React, { useContext, useState } from 'react'
import "./hotel.css"
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../component/mailList/MailList'
import Footer from '../../component/footer/Footer'
import useFetch from '../../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'
import Reserve from '../../component/reserve/Reserve'

const Hotel = () => {
  
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSliderNumber] = useState(0)

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  
  const {data, loading, error} = useFetch(`/api/hotels/find/${id}`)
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {dates, options} = useContext(SearchContext )

  // console.log(dates);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

let days = 1; // default fallback to 1 night

if (dates?.[0]?.startDate && dates?.[0]?.endDate) {
  const start = new Date(dates[0].startDate);
  const end = new Date(dates[0].endDate);
  days = dayDifference(end, start);
}


  const handleOpen = (i) =>{
    setSliderNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }

    setSliderNumber(newSlideNumber )
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };



  return (
    <div>
       <Navbar />
       <Header type="list" />
      { loading ? ("loading") : (

       <div className="hotelContainer">
        {open && <div className="slider">
    <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=> setOpen(false)}/>
    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow'onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
          </div>
    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow'onClick={()=>handleMove("r")}/>

        </div>}
        <div className="hotelWrapper">
          <button className="booknow">Reserve or Book Now</button>
          <h1 className="hotelTitle">{data.name}
          </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.adress}</span>
          </div>
          <span className="hotelDistance">
            Excellent location {data.distance}m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${data.cheapestPrice} at this property and get a free airpost taxi
          </span>
          <div className="hotelImages">
                {data.photos?.map((photo, i)=>(
                  <div className="hotelImgWrapper">
                    <img onClick={()=>handleOpen(i)} src={photo} alt="" className="hotelImg" />
                  </div>
                ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
             {data.desc}
              </p>

            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an excellent location score of 9.8! 
              </span>
              <h2>
                <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
       </div> )}
       {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </div>
  )
}

export default Hotel
