import { Link } from "react-router-dom";

export const userColumnsPending = [
    { 
        field: "id", 
        headerName: "ID", 
        width: 70 
    },
    {
        field: "pledger_name",
        headerName: "Pledger Name",
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
        field: "token_name",
        headerName: "Token Name",
        width:150
    },
    {
        field: "number_of_tokens",
        headerName: "Number of Tokens Pledged",
        width:200
    },
    {
        field: "number_of_tokens_remaining",
        headerName: "Number of Tokens Remaining",
        width:220
    },

    {
        field: "status",
        headerName: "Status",
        width:150
    },

    {
        field: "transaction_value",
        headerName: "Transaction Value",
        width:150
    },
    {
        field: "date_of_request",
        headerName: "Date Of Request",
        width:250
    },
    {
        field: "payment_status",
        headerName: "Payment Status",
        width:150
    },
    {
        field: "action", 
        headerName: "Action",
        width:150,  
        renderCell: (params)=> {
            return (
                <div className='cellAction'>
                    <Link to={`/manage-transactions-token/${params.row.property_id}/manage/${params.row.id}`} style={{textDecoration: "none"}}>
                        <div className='viewButton'>Manage Payment</div>
                    </Link>
                </div>
            )
        }  
    }
  ];


  export const handleUserRowsPending = (data)=>{
    const dummyArr = []
    data?.map((d)=>{
      const newVal = {
        id:d.req_id,
        pledger_name:d.Pledger_Name,
        property_name:d.Property_Name,
        property_id:d.property_id,
        token_name:d.token_name,
        number_of_tokens:d.no_of_tokens,
        number_of_tokens_remaining:d.RemainingTokens,
        status:d.Status,
        transaction_value:d.TransactionValue,
        date_of_request:d.date_of_request,
        payment_status:d.payment_status,

    }
      dummyArr.push(newVal)
    })
    return dummyArr
  }