import './widget.scss'
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


function Widget({type}) {

  let data;
  //temporary

  const amount = 100
  const diff = 20

  switch(type){
    case "user":
      data={
        title: "USERS",
        isMoney:false,
        link: "See all users",
        icon: <Person2OutlinedIcon className='icon' style={{backgroundColor: "#F07A7A"}}/>
      };
      break
    case "Token Transactions":
      data={
        title: "Token Transactions",
        isMoney:false,
        link: "View all Token Transactions",
        icon: <ShoppingCartOutlinedIcon className='icon' style={{backgroundColor: "#F0D97A"}}/>
      };
      break
    case "Rental Transactions":
      data={
        title: "Rental Transactions",
        isMoney:false,
        link: "View all Rental Transactions",
        icon: <MonetizationOnOutlinedIcon className='icon' style={{backgroundColor: "#65F682"}}/>
      };
      break
    case "Token Transfer Requests":
    data={
      title: "Token Transfer Requests",
      isMoney:false,
      link: "See details",
      icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{backgroundColor: "#F165F6"}}/>
    };
    break
    default:
      break
  }

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpOutlinedIcon/>
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget