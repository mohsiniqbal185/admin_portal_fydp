import React from 'react'
import './productCard.scss'
import property from '../../assets/property.jpg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

function ProductCard({project,i,pathname}) {

    const navigate = useNavigate()
    const {property_id ,name,location, no_of_tokens, tokens_sold,property_type,value_in_pkr} = project
    const status = no_of_tokens > tokens_sold ? 'Available' : 'Not Available'
    // const {value} = properties?.filter((p)=>p.title.toLowerCase()==='token price')[0]
    const token_price = value_in_pkr/no_of_tokens;

  return (
    <div className='card'>
        <div className='image-container'>
            <img src={property} alt="Property-image" />
            <div class="dark-overlay"></div>
            <div className='status-badge'>Token&nbsp;Price(PKR):&nbsp;{token_price}</div>
        </div>
        <div className='text-container'>
            <div className='text'>
                <h3>{name}</h3>
                <small className='address'><LocationOnOutlinedIcon className='addr-icon'/>{location}</small>
                <small className='address'><AccountTreeOutlinedIcon className='addr-icon'/>{property_type}</small>
                {/* <p>{desc}</p> */}
            </div>
            <button onClick={()=>navigate(`${pathname}/${property_id}`)}><span>Explore</span>&nbsp;<KeyboardArrowRightOutlinedIcon className='icon'/></button>
            
        </div>
    </div>
  )
}

export default ProductCard