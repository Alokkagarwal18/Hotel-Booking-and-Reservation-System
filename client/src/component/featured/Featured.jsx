import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
       <img src="https://c1.staticflickr.com/9/8042/8039257987_676b6b030b_b.jpg" alt="" className='featuredImg' />
       <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 Properties</h2>
       </div>
      </div>

      <div className="featuredItem">
       <img src="https://senderoconsulting.com/wp-content/uploads/2021/12/ATX-Night-AdobeStock_217495023-scaled.jpeg" alt="" className='featuredImg' />
       <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>654 Properties</h2>
       </div>
      </div>

      <div className="featuredItem">
       <img src="https://www.wildnatureimages.com/images/xl/071006-149-Reno-Nevada-Skyline.jpg" alt="" className='featuredImg' />
       <div className="featuredTitles">
            <h1>Reno</h1>
            <h2>231 Properties</h2>
       </div>
      </div> 


      </div>
 
  )
}

export default Featured
