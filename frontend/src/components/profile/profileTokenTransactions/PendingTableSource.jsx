import { Link } from "react-router-dom";
const handleCopy=(params)=>{
    navigator.clipboard.writeText(params);

}
export const userColumnsPending = [
    { 
        field: "id", 
        headerName: "Request ID", 
        width: 100 
    },
    {
        field: "pledger_id",
        headerName: "Pledger ID",
        width:150
    },
    {
        field: "pledger_name",
        headerName: "Pledger Name",
        width:150
    },
    {
        field: "payment_status",
        headerName: "Payment Status",
        width:150
    },
    {
        field: "token_name",
        headerName: "Token Name",
        width:150
    },
    {
        field: "date_of_request",
        headerName: "Date of Request",
        width:150
    },
    {
        field: "status",
        headerName: "Status",
        width:150
    },
    {
        field: "number_of_tokens",
        headerName: "Number of Tokens",
        width:150
    },
    {
        field: "remaining_tokens",
        headerName: "Remaining Tokens",
        width:150
    },
    {
        field: "action", 
        headerName: "Action",  
        width:150,
        renderCell: (params)=> {
            return (
                <div className='cellAction'>
                    <Link to={`#`} style={{textDecoration: "none"}}>
                        <div className='viewButton'>Manage</div>
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
        id: d.req_id,
        pledger_id:d.pledger_id,
        pledger_name:d.name,
        payment_status:d.payment_status,
        token_name:d.token_name,
        date_of_request:d.date_of_request,
        status:d.Status,
        number_of_tokens:d.no_of_tokens,
        remaining_tokens:d.RemainingTokens,
    }
      dummyArr.push(newVal)
    })
    return dummyArr
  }