import './widget.scss'
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Widget({type}) {

  const [userCount, setUserCount] = useState(0)
  const [transactionsCount, setTransactionsCount] = useState(0)
  const [pendingTransactionsCount, setPendingTransactionsCount] = useState(0)


  useEffect(() => {
    const fetchUsersCount= async () => {
      try{
      const res = await axios.get(`api/admin/show-stats/users-count`)
      // console.log(res.data[0].number_of_users) 
      setUserCount(res.data[0].number_of_users)    
        // setTransactions(res.data)
      } catch(err){
        console.log(err)
        setUserCount(0)
      }
    }

    const fetchTransactionsCount= async () => {
      try{
      const res = await axios.get(`api/admin/show-stats/transactions-count`)
      // console.log(res.data[0].number_of_transactions) 
      setTransactionsCount(res.data[0].number_of_transactions)    
        // setTransactions(res.data)
      } catch(err){
        console.log(err)
        setTransactionsCount(0)
      }
    }

    const fetchPendingTransactionsCount= async () => {
      try{
      const res = await axios.get(`api/admin/show-stats/pending-transactions-count`)
      // console.log(res.data[0].number_of_pending_transactions) 
      setPendingTransactionsCount(res.data[0].number_of_pending_transactions)    
        // setTransactions(res.data)
      } catch(err){
        console.log(err)
        setPendingTransactionsCount(0)
      }
    }


    fetchUsersCount()
    fetchTransactionsCount()
    fetchPendingTransactionsCount()
  }, [])

  let data;
  //temporary


  switch(type){
    case "user":
      data={
        title: "Users",
        isMoney:false,
        link: "See all users",
        url:"/users",
        count: userCount,
        icon: <Person2OutlinedIcon className='icon' style={{backgroundColor: "#F07A7A"}}/>
      };
      break
    case "Token Transactions":
      data={
        title: "Token Transactions",
        isMoney:false,
        link: "View all Token Transactions",
        url:"/view-transactions-token",
        count: transactionsCount,
        icon: <ShoppingCartOutlinedIcon className='icon' style={{backgroundColor: "#F0D97A"}}/>
      };
      break

    case "Token Transfer Requests":
    data={
      title: "Token Transfer Requests",
      isMoney:false,
      link: "See details",
      url:"/manage-transactions-token",
      count: pendingTransactionsCount,
      icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{backgroundColor: "#F165F6"}}/>
    };
    break
    default:
      break
  }

  return (
    <div className='widget'>
        <div className="top">
          <span className="title">{data.title}</span>
          <span>{data.icon}</span>
        </div>
        <div className="middle">
          <span className="counter">{data.isMoney && "$"} {data.count}</span>
        </div>
        <div className="bottom">
          <span className="link">
            <Link to={data.url}>
            {data.link}
            </Link>
          </span>
        </div>
    </div>
  )
}

export default Widget