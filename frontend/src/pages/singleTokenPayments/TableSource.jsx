import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export const userColumns = [
    { 
      field: "id", 
      headerName: "Payment ID", 
      width: 100 
    },
    {
      field: "payment_method",
      headerName: "Payment Method",
      width:150
    },
    {
      field: "payment_from",
      headerName: "Payment From",
      width: 150
    },
    {
      field: "user_id",
      headerName: "User ID",
      width: 150
    },
    {
        field: "datetime",
        headerName: "DateTime",
        width: 150
    },
    {
        field: "transaction_id",
        headerName: "Transaction ID",
        width: 150
    },
    {
      field: "payment_status",
      headerName: "Payment Status",
      width: 150
  },
    {
        field: "action", 
        headerName: "Payment Details",
        width:150, 
        renderCell: (params)=> {
          const {projectId} = useParams()

            return (
                <div className='cellAction'>
                    <Link to={`/view-payments-token/${projectId}/${params.row.id}`} style={{textDecoration: "none"}}>
                        <div className='viewButton'>View</div>
                    </Link>
                </div>
            )
        }  
    },
  ];


  export const handleUserRows = (data)=>{
    const dummyArr = []
    data?.map((d)=>{
      const newVal = {
        id:d.payment_id,
        payment_method:d.payment_method,
        payment_from:d.UserName,
        user_id:d.UserID,
        datetime:d.DATE_TIME,
        transaction_id:d.req_id,
        payment_status:d.payment_status,
    }
      dummyArr.push(newVal)
    })
    return dummyArr
  }