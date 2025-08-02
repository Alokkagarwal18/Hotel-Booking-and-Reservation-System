// import React from 'react'
// import "./PropertyList.css"
// import useFetch from '../../hooks/useFetch';

// const PropertyList = () => {

//    const { data, loading, error} = useFetch("/api/hotels/countByType?cities=berlin,madrid,london");

//   return (
//     <div className='pList'>
//       {loading ? ("loading")
//       :
//       (
//       <> <div className="pListItem">
//         <img src="https://plus.unsplash.com/premium_photo-1661923725782-f73c990fbddf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D" alt="" className="pListImg" />
//         <div className="pListTitles">
//           <h1>Hotels</h1>
//           <h2>234 Hotels</h2>
//         </div>
//       </div>

//       <div className="pListItem">
//         <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D" alt="" className="pListImg" />
//         <div className="pListTitles">
//           <h1>Apartments</h1>
//           <h2>234 Hotels</h2>
//         </div>
//       </div>

//       <div className="pListItem">
//         <img src="https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D" alt="" className="pListImg" />
//         <div className="pListTitles">
//           <h1>Resorts</h1>
//           <h2>2734 Hotels</h2>
//         </div>
//       </div>

//       <div className="pListItem">
//         <img src="https://images.unsplash.com/photo-1621293954908-907159247fc8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D" alt="" className="pListImg" />
//         <div className="pListTitles">
//           <h1>Hotels</h1>
//           <h2>5234 Hotels</h2>
//         </div>
//       </div>

//       <div className="pListItem">
//         <img src="https://images.unsplash.com/photo-1630587148265-761cbd139043?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D" alt="" className="pListImg" />
//         <div className="pListTitles">
//           <h1>Villas</h1>
//           <h2>1234 Hotels</h2>
//         </div>
//       </div>

//       <div className="pListItem">
//         <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww" alt="" className="pListImg" />
//         <div className="pListTitles">
//           <h1>Cabins</h1>
//           <h2>2334 Hotels</h2>
//         </div>
//       </div> </>)}

//     </div>
//   )
// }

// export default PropertyList


// my working code

// import useFetch from "../../hooks/useFetch";
// import "./propertyList.css";

// const PropertyList = () => {
//   const { data, loading, error } = useFetch("/api/hotels/countByType");

//    console.log("API response from /hotels/countByType:", data);

//   const images = [
//     "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
//     "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
//     "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
//     "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
//     "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
//   ];

//   // Ensure data is an array
//   const list = Array.isArray(data) ? data : [];

//   return (
//     <div className="pList">
//       {loading ? (
//         "Loading..."
//       ) : error ? (
//         <div>Error: {error.message || "Something went wrong"}</div>
//       ) : (
//         <>
//           {list.map((item, i) => (
//             <div className="pListItem" key={i}>
//               <img
//                 src={images[i] || images[0]} // fallback image
//                 alt={item.type}
//                 className="pListImg"
//               />
//               <div className="pListTitles">
//                 <h1>{item.type}</h1>
//                 <h2>{item.count} {item.type}s</h2>
//               </div>
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// };

// export default PropertyList;


//chatgpt

import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
import { Link } from "react-router-dom"; // ✅ Import Link

const PropertyList = () => {
  const { data, loading, error } = useFetch("/api/hotels/countByType");

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  const list = Array.isArray(data) ? data : [];

  return (
    <div className="pList">
      {loading ? (
        "Loading..."
      ) : error ? (
        <div>Error: {error.message || "Something went wrong"}</div>
      ) : (
        <>
          {list.map((item, i) => (
            <Link
              to={`/hotels?type=${encodeURIComponent(item.type)}`}
              key={i}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="pListItem">
                <img
                  src={images[i] || images[0]}
                  alt={item.type}
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{item.type}</h1>
                  <h2>{item.count} {item.type}s</h2>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;

