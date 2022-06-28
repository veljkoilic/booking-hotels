import React from 'react'
import './featured.css'

function Featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img className='featuredImg' src="https://i.picsum.photos/id/257/500/500.jpg?hmac=E3aibLoocUMIz-mk6W9pP-kEVnEHryz0tZdv3ZDwE28" alt="" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>234 Properties</h2>
            </div>
        </div>
    
        <div className="featuredItem">
            <img className='featuredImg' src="https://i.picsum.photos/id/99/500/500.jpg?hmac=g5PuEwygcoIAMFLxROuKdbmOGA_FTIllnc7hUFl3Rkk" alt="" />
            <div className="featuredTitles">
                <h1>New York</h1>
                <h2>543 Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img className='featuredImg' src="https://i.picsum.photos/id/937/500/500.jpg?hmac=h3VHyRzUd0Bycrd_LdV66y6n8jaNd15oKBYJnQBiATc" alt="" />
            <div className="featuredTitles">
                <h1>Belgrade</h1>
                <h2>215 Properties</h2>
            </div>
        </div>
    </div>

  )
}

export default Featured

