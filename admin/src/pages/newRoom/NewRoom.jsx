// // import "./newRoom.scss";
// // import Sidebar from "../../components/sidebar/Sidebar";
// // import Navbar from "../../components/navbar/Navbar";
// // import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// // import { useState } from "react";
// // import { roomInputs } from "../../formSource";
// // import useFetch from "../../hooks/useFetch";
// // import axios from "axios";

// // const NewRoom = () => {
// //   const [info, setInfo] = useState({});
// //   const [hotelId, setHotelId] = useState(undefined);
// //   const [rooms, setRooms] = useState([]);

// //   const { data, loading, error } = useFetch("/hotels");

// //   const handleChange = (e) => {
// //     setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
// //   };

// //   const handleClick = async (e) => {
// //     e.preventDefault();
// //     const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
// //     try {
// //       await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
 
// //   console.log(info)
// //   return (
// //     <div className="new">
// //       <Sidebar />
// //       <div className="newContainer">
// //         <Navbar />
// //         <div className="top">
// //           <h1>Add New Room</h1>
// //         </div>
// //         <div className="bottom">
// //           <div className="right">
// //             <form>
// //               {roomInputs.map((input) => (
// //                 <div className="formInput" key={input.id}>
// //                   <label>{input.label}</label>
// //                   <input
// //                     id={input.id}
// //                     type={input.type}
// //                     placeholder={input.placeholder}
// //                     onChange={handleChange}
// //                   />
// //                 </div>
// //               ))}
// //               <div className="formInput">
// //                 <label>Rooms</label>
// //                 <textarea
// //                   onChange={(e) => setRooms(e.target.value)}
// //                   placeholder="give comma between room numbers."
// //                 />
// //               </div>
// //               <div className="formInput">
// //                 <label>Choose a hotel</label>
// //                 <select
// //                   id="hotelId"
// //                   onChange={(e) => setHotelId(e.target.value)}
// //                 >
// //                   {loading
// //                     ? "loading"
// //                     : data &&
// //                       data.map((hotel) => (
// //                         <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
// //                       ))}
// //                 </select>
// //               </div>
// //               <button onClick={handleClick}>Send</button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default NewRoom;

// import "./newRoom.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useState } from "react";
// import { roomInputs } from "../../formSource";
// import useFetch from "../../hooks/useFetch";
// import axios from "axios";

// const NewRoom = () => {
//   const [info, setInfo] = useState({});
//   const [hotelId, setHotelId] = useState(undefined);
//   const [rooms, setRooms] = useState([]);

//   const { data, loading, error } = useFetch("/hotels");

//   const handleChange = (e) => {
//     setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
//     try {
//       await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   console.log(info)
//   return (
//     <div className="new">
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />
//         <div className="top">
//           <h1>Add New Room</h1>
//         </div>
//         <div className="bottom">
//           <div className="right">
//             <form>
//               {roomInputs.map((input) => (
//                 <div className="formInput" key={input.id}>
//                   <label>{input.label}</label>
//                   <input
//                     id={input.id}
//                     type={input.type}
//                     placeholder={input.placeholder}
//                     onChange={handleChange}
//                   />
//                 </div>
//               ))}
//               <div className="formInput">
//                 <label>Rooms</label>
//                 <textarea
//                   onChange={(e) => setRooms(e.target.value)}
//                   placeholder="give comma between room numbers."
//                 />
//               </div>
//               <div className="formInput">
//                 <label>Choose a hotel</label>
//                 <select
//                   id="hotelId"
//                   onChange={(e) => setHotelId(e.target.value)}
//                 >
//                   {loading
//                     ? "loading"
//                     : data &&
//                       data.map((hotel) => (
//                         <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
//                       ))}
//                 </select>
//               </div>
//               <button onClick={handleClick}>Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewRoom;

import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState("");
  const [rooms, setRooms] = useState("");
  const navigate = useNavigate();
  

  const { data, loading, error } = useFetch("/hotels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!hotelId) {
      alert("Please select a hotel first.");
      return;
    }

    const roomNumbers = rooms
      .split(",")
      .map((room) => ({ number: room.trim() }));

    try {
      await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
      navigate("/rooms");
      
    } catch (err) {
      console.log("Error creating room:", err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}

              <div className="formInput">
                <label>Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="Give comma-separated room numbers (e.g., 101,102,103)"
                />
              </div>

              <div className="formInput">
                <label>Choose a hotel</label>
                <select
                  id="hotelId"
                  value={hotelId}
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  <option value="">Select a hotel</option>
                  {loading
                    ? "Loading..."
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
              </div>

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
