import { useEffect, useState } from "react"
import axios from "axios";



const useFetch = (url) =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() =>{
        const fetchData = async ()=>{
          setLoading(true)
          try {
            const res = await axios.get(url)
            setData(res.data);
          } catch (err) {
            setError(err);
          }
          setLoading(false)
        };
        fetchData();
    }, [url])



 const reFetch = async ()=>{
          setLoading(true)
          try {
            const res = await axios.get(url)
            setData(res.data);
          } catch (err) {
            setError(err);
          }
          setLoading(false)
        };
        return {data, loading, error, reFetch};
  };

  export default useFetch;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(`http://localhost:8800/api${url}`, {
//         withCredentials: true,
//       });
//       setData(res.data);
//     } catch (err) {
//       setError(err);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [url]);

//   const reFetch = fetchData;

//   return { data, loading, error, reFetch };
// };

// export default useFetch;
