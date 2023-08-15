import React from 'react'
import './home.scss'
import Widget from '../../components/widget/Widget'
import List from '../../components/table/Table'
// import Widget from '../../components/widget/Widget'
// import Featured from '../../components/featured/Featured'
// import Chart from '../../components/chart/Chart'
// import List from '../../components/table/Table'

function Home() {
  return (
        <div>
          <div className="widgets">
            <Widget type='user'/>
            <Widget type='Token Transactions'/>
            <Widget type='Token Transfer Requests'/>
          </div>

          <div className="listContainer">
            <div className="listTitle">Latest Transactions on Platform</div>
            <List/>
          </div>
        </div>
  )
}

export default Home