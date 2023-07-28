import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios";
function ViewTokenTransactionsByProperty() {
    const [transactionsdata, setData] = useState(null);
    const [Pendingtransactionsdata, setPendingData] = useState(null);
    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
    };
    const thStyle = {
        width :"15px",
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
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const propertyId = queryParams.get("property_id");
//get url params
let params = useParams();

    useEffect(() => {
        const fetchTokenTransactions = async() => {
            const res = await axios.get("/api/admin/view_token_transactions/"+params.property_id);

            try{
                setData(res.data.transactionsData)
                setPendingData(res.data.PendingTransactionsData)
            // console.log(res)
            }
            catch(error){
                console.log(error);
            }
        }
        fetchTokenTransactions();

        },[])
        // const handleClick = (event) => {
        //     const propertyId = event.target.id;
        //     window.location.href = "/view_token_transactions/"+propertyId;
        //   };
    return(
        // <div>
        // {/* // { data && data.length>0 ? ( */}
        // //     <div>
        // //     {data.map((item) => (
        // //             <div key={item.property_id}>
        // //           <button id = {item.property_id} style={buttonstyle} onClick={handleClick}>{item.name}</button>
        // //           </div>
        // //       ))}
        // //       </div>
        // // ) : (
        // //     <p>No Properties Found</p>
        // // )

        // // }
        // </div>
        <div>
             <p>Completed Transactions</p>
            {transactionsdata && transactionsdata.length ? (

                <table style={tableStyle}>
                    <thead>
                        <tr style={trHoverStyle}>
                            <th style={thStyle}>Holder ID</th>
                            <th style={thStyle}>Holder Name</th>
                            <th style={thStyle}>Token Transaction ID</th>
                            <th style={thStyle}>Property Name</th>
                            <th style={thStyle}>Property ID</th>
                            <th style={thStyle}> SenderID</th>
                            <th style={thStyle}>Number Of Tokens</th>
                            <th style={thStyle}>transaction hash</th>



                        </tr>
                    </thead>
                
                    <tbody>
                        {transactionsdata.map((item) => (
                            <tr key={item.token_transaction_id} style={trHoverStyle}>
                                <td style={tdStyle}>{item.user_id}</td>
                                <td style={tdStyle}>{item.fname} {item.lname}</td>
                                <td style={tdStyle}>{item.token_transaction_id}</td>
                                <td style={tdStyle}>{item.name}</td>
                                <td style={tdStyle}>{item.property_id}</td>
                                <td style={tdStyle}>{item.sender_id}</td>
                                <td style={tdStyle}>{item.no_of_tokens}</td>
                                <td style={tdStyle}>{item.transaction_hash}</td>
                                <td><button id = {item.user_id}style={buttonstyle}>View Payment Details</button></td>
                            <td><button id = {item.user_id}style={buttonstyle}>View On Etherscan</button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                
                
            ) : (
                <p>No Token transactions available</p>
            )}
            <p>Pending Transactions</p>
            {Pendingtransactionsdata && Pendingtransactionsdata.length>0 ? (

                <div>
                <table style={tableStyle}>
                    <thead>
                        <tr style={trHoverStyle}>
                            <th style={thStyle}>Request ID</th>
                            <th style={thStyle}>Pledger ID</th>
                            <th style={thStyle}>Pledger Name</th>
                            <th style={thStyle}> Payment Status</th>
                            <th style={thStyle}>Token Name</th>
                            <th style={thStyle}>Date Of Request</th>
                            <th style={thStyle}>Status</th>
                            <th style={thStyle}>Number Of tokens</th>
                            <th style={thStyle}>Remaining Tokens</th>
                            <th style={thStyle}>Action</th>





                        </tr>
                    </thead>
           
                    <tbody>
                        {Pendingtransactionsdata.map((item) => (
                            <tr key={item.req_id} style={trHoverStyle}>
                                <td style={tdStyle}>{item.Pledger_ID}</td>
                                <td style={tdStyle}>{item.Pledger_Name}</td>
                                <td style={tdStyle}>{item.req_id}</td>
                                <td style={tdStyle}>{item.payment_status}</td>
                                <td style={tdStyle}>{item.token_name}</td>
                                <td style={tdStyle}>{item.date_of_request}</td>
                                <td style={tdStyle}>{item.date_of_request}</td>
                                <td style={tdStyle}>{item.no_of_tokens}</td>
                                <td style={tdStyle}>{item.RemainingTokens}</td>

                                <td><button id = {item.user_id}style={buttonstyle}>Manage</button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                
            ) : (
                <p>No Pending transactions available</p>
            )}

        </div>
    )
}


export default ViewTokenTransactionsByProperty;