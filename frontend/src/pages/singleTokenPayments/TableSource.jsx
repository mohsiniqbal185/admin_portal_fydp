import { Link } from "react-router-dom";

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
        field: "action", 
        headerName: "Payment Status",
        width:150, 
        renderCell: (params)=> {
            return (
                <div className='cellAction'>
                    <Link to={`/view-payments-token/${params.row.id}/${params.row.id}`} style={{textDecoration: "none"}}>
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
        id:d.property_id,
        payment_method:'Hamza',
        payment_from:2,
        datetime:d.name,
        transaction_id:d.property_id,
    }
      dummyArr.push(newVal)
    })
    return dummyArr
  }