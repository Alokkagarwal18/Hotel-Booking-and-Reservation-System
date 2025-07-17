import React from 'react'
import "./featuredProperties.css"
const FeaturedProperties = () => {
  return (
    <div className='fp'>
      {/* First Property */}
      <div className="fpItem">
        <img src="https://images.unsplash.com/photo-1615722440048-da4ccf6de048?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      {/* Second Property */}
      <div className="fpItem">
        <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww" alt="" className="fpImg" />
        <span className="fpName">Grand Hotel Palace</span>
        <span className="fpCity">Paris</span>
        <span className="fpPrice">Starting from $200</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Superb</span>
        </div>
      </div>

      {/* Third Property */}
      <div className="fpItem">
        <img src="https://images.unsplash.com/photo-1615722440048-da4ccf6de048?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww" alt="" className="fpImg" />
        <span className="fpName">Royal Beach Resort</span>
        <span className="fpCity">Maldives</span>
        <span className="fpPrice">Starting from $350</span>
        <div className="fpRating">
          <button>9.5</button>
          <span>Outstanding</span>
        </div>
      </div>

      {/* Fourth Property */}
      <div className="fpItem">
        <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww" alt="" className="fpImg" />
        <span className="fpName">Skyline Tower Suites</span>
        <span className="fpCity">New York</span>
        <span className="fpPrice">Starting from $280</span>
        <div className="fpRating">
          <button>8.7</button>
          <span>Very Good</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties
