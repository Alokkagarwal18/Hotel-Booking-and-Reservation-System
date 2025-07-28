import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch"
import { useEffect } from "react";
import axios from "axios";



const Datatable = ({columns}) => {
  // const [data, setData] = useState(userRows);
  const location = useLocation();
  const path =  location.pathname.split("/")[1];
  const [list, setList] = useState();
  const{data, loading, error} = useFetch(`/${path}`);

  useEffect(()=>{
      setList(data);
  }, [data])

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`/${path}/${id}`);
  //     // await axios.delete(`http://localhost:8800/api/${path}/${id}`, {
  //     // withCredentials: true,
  //     // });
  //     setList(list.filter((item) => item._id !== id));
  //   } catch (error) {
  //   }

  // };

//   const handleDelete = async (id) => {
//   try {
//     // 1. Get the room to extract its hotelId
//     const roomRes = await axios.get(`/rooms/${id}`);
//     const hotelId = roomRes.data.hotelId;

//     // 2. Now delete the room using correct URL
//     await axios.delete(`/${path}/${id}/${hotelId}`, {
//       withCredentials: true,
//     });

//     // 3. Remove from UI
//     setList(list.filter((item) => item._id !== id));
//   } catch (error) {
//     console.error("Delete failed:", error);
//   }
// };

const handleDelete = async (id) => {
  try {
    if (path === "rooms") {
      const roomRes = await axios.get(`/rooms/${id}`);
      const hotelId = roomRes.data?.hotelId;

      if (!hotelId) {
        console.error("Hotel ID not found in room:", id);
        return;
      }

      await axios.delete(`/rooms/${id}`);
      await axios.delete(`/hotels/${hotelId}/room/${id}`);
    } else {
      await axios.delete(`/${path}/${id}`);
    }

    setList((prev) => prev.filter((item) => item._id !== id));
  } catch (error) {
    console.error("Delete failed:", error);
  }
};

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list || []}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  );
};

export default Datatable;
