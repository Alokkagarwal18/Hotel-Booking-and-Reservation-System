// import React from 'react'
// import "./searchItem.css"
// import { Link } from 'react-router-dom'

// const SearchItem = ({item}) => {
//   return (
//     <div className='searchItem'>
//     <img
//     src={item.photos[0]}
//     alt=""
//     className="siImg"
//     />

//     <div className="siDesc">
//       <h1 className="siTitle">{item.name}</h1>
//       <span className="siDistance">{item.distance}m from center</span>
//       <span className="siTaxiOp">Free airport taxi</span>
//       <span className="siSubtitle">
//         Studio Apartment with Air conditioning
//       </span>
//       <span className="siFeatures">
//         {item.desc}
//       </span>
//       <span className="siCancelOp">Free cancellation</span>
//       <span className="siCancelOpSubtitle">
//         You can cancel later, so lock in this great price today!
//       </span>
//     </div>


//       <div className="siDetails">
//       {item.rating && 
//       <div className="siRating">
//         <span>Excellent</span>
//         <button>{item.rating}</button>
//       </ div >}

//         <div className="siDetailTexts">
//           <span className="siPrice">${item.cheapestPrice}</span>
//           <span className="siTaxOp">Includes taxes and fees</span>
//           <Link to={`/hotels/${item._id}`}>
//         <button className='siCheckButton'>See availability</button>
//           </Link>
//         </div>
//        </div>
//       </div>
//   )
// }

// export default SearchItem



// my working code


// import { Link } from "react-router-dom";
// import "./searchItem.css";

// const SearchItem = ({ item }) => {
//   return (
//     <div className="searchItem">
//       <img src={item.photos[0]} alt="" className="siImg" />
//       <div className="siDesc">
//         <h1 className="siTitle">{item.name}</h1>
//         <span className="siDistance">{item.distance}m from center</span>
//         <span className="siTaxiOp">Free airport taxi</span>
//         <span className="siSubtitle">
//           Studio Apartment with Air conditioning
//         </span>
//         <span className="siFeatures">{item.desc}</span>
//         <span className="siCancelOp">Free cancellation </span>
//         <span className="siCancelOpSubtitle">
//           You can cancel later, so lock in this great price today!
//         </span>
//       </div>
//       <div className="siDetails">
//         {item.rating && <div className="siRating">
//           <span>Excellent</span>
//           <button>{item.rating}</button>
//         </div>}
//         <div className="siDetailTexts">
//           <span className="siPrice">${item.cheapestPrice}</span>
//           <span className="siTaxOp">Includes taxes and fees</span>
//           <Link to={`/hotels/${item._id}`}>
//           <button className="siCheckButton">See availability</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchItem;


// chatgpt update code

// src/components/SearchItem.jsx
// import { Link } from "react-router-dom";
// import "./searchitem.css"; // Make sure this file exists

// const SearchItem = ({ item }) => {
//   return (
//     <div className="searchItem">
//       <Link
//         to={`/hotels/${item._id}`}
//         style={{ textDecoration: "none", color: "inherit" }}
//       >
//         <div className="siContent">
//           <img src={item.photos[0]} alt={item.name} className="siImg" />
//           <div className="siDesc">
//             <h1 className="siTitle">{item.name}</h1>
//             <span className="siDistance">{item.distance}m from center</span>
//             <span className="siTaxiOp">Free airport taxi</span>
//             <span className="siSubtitle">
//               {item.desc?.substring(0, 100)}...
//             </span>
//             <span className="siFeatures">{item.features}</span>
//             <span className="siCancelOp">Free cancellation</span>
//           </div>
//           <div className="siDetails">
//             <div className="siRating">
//               <span>Excellent</span>
//               <button>{item.rating || 8.9}</button>
//             </div>
//             <div className="siDetailTexts">
//               <span className="siPrice">₹{item.cheapestPrice}</span>
//               <span className="siTaxOp">Includes taxes and fees</span>
//               <button className="siCheckButton">See Availability</button>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default SearchItem;

import { Link } from "react-router-dom";
import "./searchitem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt={item.name} className="siImg" />

      <div className="siDesc">
        <Link
          to={`/hotels/${item._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h1 className="siTitle">{item.name}</h1>
        </Link>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          {item.desc?.substring(0, 100)}...
        </span>
        <span className="siFeatures">{item.features}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">₹{item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;


