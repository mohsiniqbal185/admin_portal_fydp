import React from "react"
import './users.scss'
import axios from "axios";
import { useEffect , useState} from "react";
import Datatable from "../../components/datatable/Datatable"
import Header from "../../components/header/Header";
import { handleUserRows, userColumns } from "./TableSource";
import { useQuery } from "@tanstack/react-query";
import { slideVariants } from "../../utilities/animations";
import { motion } from "framer-motion";

const headerOptions = {title:'Users'}

function Users() {
    // const [data, setData] = useState(null);
    const [userRows,setUserRows] = useState([])

    // useEffect(() => {
    //     const fetchUsers = async() => {
    //         const res = await axios.get("/api/admin/users")
    //         try{
    //         setData(res.data)
    //         }
    //         catch(error){
    //             console.log(error);
    //         }
    //     }
    //     if(!data){
    //       fetchUsers();
    //     }
    //     },[])

    const { isLoading, error, data } = useQuery({
      queryKey: ['users'],
      queryFn: () =>
        axios.get('/api/admin/users').then(
            (res) => res.data
        ),
    })

    useEffect(()=>{
      if(data){
        setUserRows(handleUserRows(data))
      }
    },[data])
  
  return (
  <div>
    <Header title={headerOptions.title}/>
    <motion.div variants={slideVariants} initial='initial' animate='animate'>
      <Datatable userRows={userRows} userColumns={userColumns}/>
    </motion.div>
  </div>
);
}

export default Users;




{/* {data ? (
      <table style={tableStyle}>
        <thead>
        <tr style = {trHoverStyle}>
          <th style={thStyle}>ID</th>
          <th style={thStyle}>Name</th>
          <th style={thStyle}> Email</th>
          <th style={thStyle}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.user_id} style = {trHoverStyle}>
            <td style={tdStyle}>{item.user_id}</td>
            <td style={tdStyle}>{item.User}</td>
            <td style={tdStyle}>{item.email}</td>
            <td><button id = {item.user_id}style={buttonstyle} onClick={handleClick}>View User Details</button></td>
          </tr>
        ))}
      </tbody>
      </table>
    ) : (
      <p>Loading...</p>
    )} */}

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
//   marginBottom: "20px",
// };
// const thStyle = {
//   padding: "12px 15px",
//   textAlign: "left",
//   borderBottom: "1px solid #ddd",
//   backgroundColor: "#f2f2f2",
// };

// const tdStyle = {
//   padding: "12px 15px",
//   textAlign: "left",
//   borderBottom: "1px solid #ddd",
// };

// const trHoverStyle = {
//   backgroundColor: "#f5f5f5",
// };
// const buttonstyle = {
//   backgroundColor: "grey",
  
// };