import React from 'react'
import "./featured.css"
import useFetch from '../../hooks/useFetch'

const Featured = () => {

     const { data, loading, error} = useFetch("/api/hotels/countByCity?cities=berlin,madrid,london");
    
  return (
    <div className='featured'>
     {loading ? ("Loading please wait"
  ) : (
     <>
      <div className="featuredItem">
       <img src="https://images.pexels.com/photos/1128416/pexels-photo-1128416.jpeg" alt="" className='featuredImg' />
       <div className="featuredTitles">
            <h1>Berlin</h1>
            <h2>{data[0]} properties</h2>
       </div>
      </div>

      <div className="featuredItem">
       <img src="https://images.pexels.com/photos/919291/pexels-photo-919291.jpeg" alt="" className='featuredImg' />
       <div className="featuredTitles">
            <h1>Madrid</h1>
            <h2>{data[1]} properties</h2>
       </div>
      </div>

      <div className="featuredItem">
       <img src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg" alt="" className='featuredImg' />
       <div className="featuredTitles">
            <h1>London</h1>
            <h2>{data[2]} properties</h2>
       </div>
      </div> </>)}
      </div>
 
  );
};

export default Featured;

// import React from 'react'
// import './featured.css'
// import useFetch from '../../hooks/useFetch'

// const Featured = () => {
//   const { data, loading, error } = useFetch('/api/hotels/countByCity?cities=berlin,madrid,london');
//   console.log(data); // should show [1, 4, 2]

//   return (
//     <div className='featured'>
//       {loading ? (
//         "Loading please wait..."
//       ) : (
//         <>
//           <div className="featuredItem">
//             <img
//               src="https://c1.staticflickr.com/9/8042/8039257987_676b6b030b_b.jpg"
//               alt=""
//               className="featuredImg"
//             />
//             <div className="featuredTitles">
//               <h1>Berlin</h1>
//               <h2>{data[0]} properties</h2>
//             </div>
//           </div>

//           <div className="featuredItem">
//             <img
//               src="https://senderoconsulting.com/wp-content/uploads/2021/12/ATX-Night-AdobeStock_217495023-scaled.jpeg"
//               alt=""
//               className="featuredImg"
//             />
//             <div className="featuredTitles">
//               <h1>Madrid</h1>
//               <h2>{data[1]} properties</h2>
//             </div>
//           </div>

//           <div className="featuredItem">
//             <img
//               src="https://www.wildnatureimages.com/images/xl/071006-149-Reno-Nevada-Skyline.jpg"
//               alt=""
//               className="featuredImg"
//             />
//             <div className="featuredTitles">
//               <h1>London</h1>
//               <h2>{data[2]} properties</h2>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Featured;

