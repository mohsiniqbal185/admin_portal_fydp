import { Link } from "react-router-dom";

export const userColumnsCompleted = [
    { 
        field: "id", 
        headerName: "Holder ID", 
        width: 100 
    },
    {
      field: "holder_name",
      headerName: "Holder Name",
      width:150
    },
    {
      field: "token_transaction_id",
      headerName: "Token Transaction ID",
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
        field: "transaction_hash",
        headerName: "Transaction Hash",
        width:150
    },
    {
        field: "action", 
        headerName: "Action",
        width:150, 
        renderCell: (params)=> {
            return (
                <div className='cellAction'>
                    <Link to={`/users/profile?user_id=${params.row.id}`} style={{textDecoration: "none"}}>
                        <div className='viewButton'>View</div>
                    </Link>
                </div>
            )
        }
    },
    {
        field: "action", 
        headerName: "Payment Details",  
        width:150,
        renderCell: (params)=> {
            return (
                <div className='cellAction'>
                    <Link to={`/users/profile?user_id=${params.row.id}`} style={{textDecoration: "none"}}>
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
        id:d.property_id,
        holder_name:'Hamza',
        token_transaction_id:2,
        property_name:d.name,
        property_id:d.property_id,
        sender_id:5,
        number_of_tokens:10,
        transaction_hash:0x456,
    }
      dummyArr.push(newVal)
    })
    return dummyArr
  }