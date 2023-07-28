import React from 'react'
import './header.scss'
import { list } from '../Sidebar/Data';

function Header({title,caption,iconProp}) {

  let icon;
  list.map((val)=>{
    val.links.map((val2)=>{
      if(val2.type === 'Link'){
        if(title === val2.text){
          icon = val2.icon
        }
      }else{
        val2.dropdownLinks.map((val3)=>{
          if(val3.text === title){
            icon = val3.icon
          }
        })
      }
    })
  })

  const iconValue = icon ? icon : iconProp ? iconProp : null


  return (
    <div className='header'>
        <h2 className='title'>{iconValue ? <span className='header-icon'>{iconValue}</span> :''}{title}</h2>
        {caption ? <h5 className='caption' style={{marginLeft:iconValue ? '52px':''}}>{caption}</h5>:''}
    </div>
  )
}

export default Header