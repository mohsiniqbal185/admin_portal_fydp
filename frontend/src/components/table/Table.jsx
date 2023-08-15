import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import { convertDate } from "../../utilities/utilityfunc";

function List() {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const fetchTransactions = async () => {
      try{
      const res = await axios.get(`/api/admin/show-stats/recent-transactions`)
      console.log(res.data)
      setTransactions(res.data)
      } catch(err){
        console.log(err.response.data.error)
      }
    }
    fetchTransactions()
  }, [])


  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell">Property Name</TableCell>
            <TableCell className="tableCell">Property Code</TableCell>
            <TableCell className="tableCell">Reciever Wallet</TableCell>
            <TableCell className="tableCell">No of Tokens</TableCell>
            <TableCell className="tableCell">DateTime</TableCell>
            <TableCell className="tableCell">Txn Hash</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions?.map((txn) => (
            <TableRow
              key={txn.transaction_hash}
            >
              <TableCell component="th" scope="row">
                {txn.property_name}
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  
                  {txn.property_code}
                </div>
              </TableCell>
              <TableCell className="tableCell">{txn.receiver_wallet_address}</TableCell>
              <TableCell className="tableCell">{txn.no_of_tokens}</TableCell>
              <TableCell className="tableCell">{convertDate(txn.date_time)}</TableCell>
              <TableCell className="tableCell">{txn.transaction_hash}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List