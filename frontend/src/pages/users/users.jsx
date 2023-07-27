import React from "react"
import './users.scss'
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import axios from "axios";
import { useEffect , useState} from "react";

import Datatable from "../../components/datatable/Datatable"

function Users() {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  };
  const thStyle = {
    padding: "12px 15px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#f2f2f2",
  };

  const tdStyle = {
    padding: "12px 15px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  };

  const trHoverStyle = {
    backgroundColor: "#f5f5f5",
  };
  const buttonstyle = {
    backgroundColor: "grey",
    
  };
  const handleClick = (event) => {
    const buttonId = event.target.id;
    window.location.href = "/users/profile?user_id="+buttonId;
  };
    // <div className='users'>
    //   <Sidebar/>
      
      
    //   <div className="listContainer">
        
    //   <Navbar/>
    //   <Datatable/>
    //   </div>
    // </div>
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchUsers = async() => {
            const res = await axios.get("/api/admin/users")
            try{
            setData(res.data)
            // console.log(res)
            }
            catch(error){
                console.log(error);
            }
        }
        fetchUsers();

        },[])

  
  return (
  <div>
    {data ? (
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
    )}
  </div>
);
}

export default Users;