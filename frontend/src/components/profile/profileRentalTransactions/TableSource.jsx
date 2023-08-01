import { Link } from "react-router-dom";

export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        console.log(params)
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
        field: "action", 
        headerName: "Action", 
        width: 200, 
        renderCell: (params)=> {
            console.log('b',params)
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


  export const handleUserRows = (data)=>{
    const dummyArr = []
    data?.map((d)=>{
      const newVal = {
        id:d.user_id,
        username:d.User,
        img:"https://images.unsplash.com/photo-1638486071992-536e48c8fa3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9vayUyMGJhY2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        email:d.email
    }
      dummyArr.push(newVal)
    })
    return dummyArr
  }