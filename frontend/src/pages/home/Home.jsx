import React from 'react'
import './home.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/widget/Widget'
// import Widget from '../../components/widget/Widget'
// import Featured from '../../components/featured/Featured'
// import Chart from '../../components/chart/Chart'
// import List from '../../components/table/Table'

function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type='user'/>
            <Widget type='Rental Transactions'/>
            <Widget type='Token Transactions'/>
            <Widget type='Token Transfer Requests'/>
          </div>
        </div>
    </div>
  )
}

export default Home