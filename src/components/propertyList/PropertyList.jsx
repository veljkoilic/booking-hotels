import './propertyList.css'

function PropertyList() {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/12/08/86/miracle-resort-hotel.jpg?w=900&h=-1&s=1" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>167 properties</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/12/08/86/miracle-resort-hotel.jpg?w=900&h=-1&s=1" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>2367 properties</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/12/08/86/miracle-resort-hotel.jpg?w=900&h=-1&s=1" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>1627 properties</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/12/08/86/miracle-resort-hotel.jpg?w=900&h=-1&s=1" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>209 properties</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/12/08/86/miracle-resort-hotel.jpg?w=900&h=-1&s=1" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>347 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList