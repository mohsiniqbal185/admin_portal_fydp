import { Link } from "react-router-dom";
import { convertDate } from "../../utilities/utilityfunc";

export const userColumns = [
    { 
      field: "id", 
      headerName: "Request ID", 
      width: 100 
    },
    {
      field: "seller_id",
      headerName: "Seller ID",
      width: 150
    },
    {
      field: "user_name",
      headerName: "User Name",
      width: 200
    },
    {
        field: "property_name",
        headerName: "Property Name",
        width: 150
    },
    {
        field: "datetime",
        headerName: "Date of Request",
        width: 150
    },
    {
      field: "pledger_id",
      headerName: "Pledger ID",
      width: 150
    },
    {
        field: "pledger_name",
        headerName: "Pledger Name",
        width: 200
    },
    {
      field: "no_of_tokens",
      headerName: "No of Tokens",
      width: 150
    },
    {
      field: "token_value",
      headerName: "Token Value",
      width: 150
    },

    {
      field: "cost_of_tokens",
      headerName: "Total cost",
      width: 150
    },
    {
        field: "action", 
        headerName: "Action",
        width:150, 
        renderCell: (params)=> {
            return(
                <Link to={`/token-market-sale/${params.row.id}`} className='cellAction'>
                    <div className='viewButton'>Manage</div>
                </Link>
            )
        }  
    },
  ];

  export const handleUserRows = (data)=>{
    const dummyArr = []
    data?.map((d)=>{
      const newVal = {
        id:d.request_id,
        seller_id:d.seller_id,
        user_name:d.user_name,
        pledger_id:d.pledger_id ? d.pledger_id:'-',
        datetime:convertDate(d.date_time),
        pledger_name:d.pledger_name? d.pledger_name:'-',
        no_of_tokens:d.no_of_tokens,
        cost_of_tokens:d.cost_of_tokens,
        property_name:d.property_name,
        token_value:d.token_value,
        token_symbol:d.token_symbol,
    }
      dummyArr.push(newVal)
    })
    return dummyArr
  }