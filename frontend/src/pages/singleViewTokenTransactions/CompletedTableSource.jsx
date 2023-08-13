import { Link } from "react-router-dom";
const handleCopy=(params)=>{
    navigator.clipboard.writeText(params);
}
export const userColumnsCompleted = [
    { 
        field: "id", 
        headerName: "ID", 
        width: 100 
    },
    {
      field: "holder_name",
      headerName: "Holder Name",
      width:150
    },

    {
        field: "property_name",
        headerName: "Property Name",
        width:150
    },
    {
        field: "property_id",
        headerName: "Property ID",
        width:150
    },
    {
        field: "sender_id",
        headerName: "Sender ID",
        width:150
    },
    {
        field: "number_of_tokens",
        headerName: "Number of Tokens",
        width:150
    },
    {
        field: "payment_id",
        headerName: "Payment ID",
        width:150
    },
    {
        field: "transaction_hash",
        headerName: "Transaction Hash",
        width:150,
        renderCell: (params)=> {
            return (
                <div className='cellAction'>
                        <div className='viewButton' onClick={handleCopy(params.row.transaction_hash)}>{params.row.transaction_hash}</div>
                        
                </div>
            )
        }
        
    },
    {
        field: "Payment details", 
        headerName: "Payment details",
        width:150, 
        renderCell: (params)=> {
            return (
                <div className='cellAction'>
                    <Link to={`/view-payments-token/${params.row.property_id}/${params.row.payment_id}`} style={{textDecoration: "none"}}>
                        <div className='viewButton'>View</div>
                    </Link>
                </div>
            )
        }
    },
    {
        field: "action", 
        headerName: "Etherscan Details",  
        width:150,
        renderCell: (params)=> {
            return (
                <div className='cellAction'>
                    <Link to={`https://sepolia.etherscan.io/tx/${params.row.transaction_hash}`} target="_blank" style={{textDecoration: "none"}}>
                        <div className='viewButton'>View</div>
                    </Link>
                </div>
            )
        }
    }
  ];


  export const handleUserRowsCompleted = (data)=>{
    const dummyArr = []
    data?.map((d)=>{
      const newVal = {
        id: d.token_transaction_id,
        holder_name:d.fname+ ' ' +d.lname,
        property_name:d.name,
        property_id:d.property_id,
        sender_id:d.sender_id,
        number_of_tokens:d.no_of_tokens,
        transaction_hash:d.transaction_hash,
        payment_id:d.payment_id,


    }
      dummyArr.push(newVal)
    })
    return dummyArr
  }