import "./hotel.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

function Hotel() {
  const photos = [
    {src: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768'},
    {src: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768'},
    {src: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768'},
    {src: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768'},
    {src: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768'},
    {src: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768'}
  ]
  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="hotelContainer">
        <div className="slider">
          
        </div>
        <div className="hotelWrapper">
          <div className="bookNow">Reserve or Book Now!</div>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAdress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">Excellent location - 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay over 114$ at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map(photo=>(
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg"/>
              </div>
            ))}
           <div className="hotelDetails">

            <div className="hotelDetailsText">
                <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                <p className="hotelDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, eligendi debitis corrupti dolor quia explicabo laborum quas enim optio nam, labore sit illo corporis incidunt earum natus, nemo dolores pariatur voluptates non aliquid possimus omnis? Blanditiis sint minima quaerat temporibus. Dicta corporis eligendi, ducimus reprehenderit quibusdam vitae repellendus suscipit tempore?</p>
            </div>
            
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8</span>
              <h2><b>945$</b> (9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>

           </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel