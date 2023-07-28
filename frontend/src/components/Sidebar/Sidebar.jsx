import './sidebar.scss'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import {Link,useLocation} from "react-router-dom"
import { useState } from 'react';
import { list } from './Data';

const l = []
list.map((i)=>{
    i.links.map((el)=>{
        if(el.type.toLowerCase() === 'dropdown'){
            l.push({text:el.text,status:el.open})
        }
    })
})


function Sidebar() {
    const [open,setOpen] = useState(l)
    const {pathname} = useLocation()

    function changeOpen(el) {
        setOpen((prev)=>prev.map((i)=>i.text.toLowerCase() === el.toLowerCase() ? {...i,status:!i.status} :i))
      }


    function sendStatus(el){
        const statusArr = [...open]
        const filterArr = statusArr.filter((i)=>i.text.toLowerCase() === el.toLowerCase())
        return filterArr[0].status
    }

  return (
    <div className='sidebar'>
        <div className="centre">
            <ul>
                {list.map((item)=>(
                    <div key={item.title}>
                        <p className="title">{item.title}</p>
                        {item.links.map((el)=>(
                            el.type === 'Dropdown' ?
                            <div>
                                <li onClick={()=>changeOpen(el.text)} className='dropdown'>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <div style={{display:'flex',alignItems:'center',background:'#2c45a8',color:'#fff',padding:'7px',borderRadius:'50%'}}>{el.icon}</div>
                                        <span> {el.text}</span>
                                    </div>
                                    {sendStatus(el.text) ? <ArrowDropUpOutlinedIcon/>:<ArrowDropDownOutlinedIcon/>}
                                </li>
                                <div style={{display:sendStatus(el.text)?"block":"none"}}>
                                    {el.dropdownLinks.map((i)=>(
                                        <Link to={i.href} style={{textDecoration: "none"}}>
                                        <li className={pathname === i.href ?'dropdown-link hover-styles':'dropdown-link'}>                
                                        <div style={{display:'flex',alignItems:'center',background:'#2c45a8',color:'#fff',padding:'7px',borderRadius:'50%'}}>{i.icon}</div>
                                            <span>{i.text}</span>
                                        </li>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            :
                            <Link to={el.href} style={{textDecoration: "none"}}>
                                <li className={pathname === el.href ? 'link hover-styles' : 'link'}>                
                                <div style={{display:'flex',alignItems:'center',background:'#2c45a8',color:'#fff',padding:'7px',borderRadius:'50%'}}>{el.icon}</div>
                                    <span>{el.text}</span>
                                </li>
                            </Link>
                        ))}
                    </div>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar