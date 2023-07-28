import { useEffect, useState } from "react"

import axios from "axios";
function ViewTokenTransactions() {
    const [data, setData] = useState(null);

const buttonstyle = {
    backgroundColor: "grey",
    
  };
    useEffect(() => {
        const fetchTokenTransactions = async() => {
            const res = await axios.get("/api/admin/view_token_transactions")
            try{
            setData(res.data)
            // console.log(res)
            }
            catch(error){
                console.log(error);
            }
        }
        fetchTokenTransactions();

        },[])
        const handleClick = (event) => {
            const propertyId = event.target.id;
            window.location.href = "/view_token_transactions/"+propertyId;
          };
    return(
        <div>
        { data && data.length>0 ? (
            <div>
            {data.map((item) => (
                    <div key={item.property_id}>
                  <button id = {item.property_id} style={buttonstyle} onClick={handleClick}>{item.name}</button>
                  </div>
              ))}
              </div>
        ) : (
            <p>No Properties Found</p>
        )

        }
        </div>
    )
}


export default ViewTokenTransactions;