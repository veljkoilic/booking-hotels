import './searchItem.css'

function SearchItem() {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/52299521.jpg?k=a6f35f2ed008cfae1a397842e749d2b09016ea20845fc3e73d5542d2f3e371bf&o=&hp=1" alt="" className="siImg" />
        <div className="siDescription">
             <h1 className="siTitle">Tower Street Apartments</h1>
             <span className="siDistance">500m from center</span>
             <span className="siTaxiOp">Free airport taxi</span>
             <span className="siSubtitle"> Studio Apartment with Air conditioning</span>
             <span className="siFeatures">Entire Studio · 1 bathroom · 21m² · 1 full bed</span>
             <span className="siCancleOp">Free cancellation</span>
             <span className="siCancleOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className='siCheckButton'>See availability</button>
                </div>
        </div>
    </div>
  )
}

export default SearchItem