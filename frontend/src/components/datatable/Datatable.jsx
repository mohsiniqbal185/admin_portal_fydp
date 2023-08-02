import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';


function Datatable({userColumns,userRows,pending}) {

    const [inputValue,setInputValue] = useState('')

    const rows = pending ? userRows.filter((row)=>row.status === "pending"): pending === undefined ? userRows :userRows.filter((row)=>row.status !== "pending");

    const inputRows = inputValue === '' ? rows : rows.filter((val,i)=>val.username.slice(0,inputValue.length).toLowerCase() === inputValue.slice(0,inputValue.length).toLowerCase())

  return (
    <div className='datatable'>
        <div className='datatable-container'>
        <div className='searchbox'>
            <input type="text" placeholder='Search' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        </div>
        {inputRows.length !== 0 ?
        <DataGrid
            className='datagrid'
            rows={inputRows}
            columns={userColumns}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 5 },
            },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
        :
        <div className='no-results'>
            <ThumbDownAltOutlinedIcon/>&nbsp;No Results Available!
        </div>
        }
        </div>
    </div>
  )
}

export default Datatable