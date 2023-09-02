import React from 'react'
import './home.scss'
import Widget from '../../components/widget/Widget'
import List from '../../components/table/Table'
import { motion } from 'framer-motion'
import { slideVariants } from '../../utilities/animations'
// import Widget from '../../components/widget/Widget'
// import Featured from '../../components/featured/Featured'
// import Chart from '../../components/chart/Chart'
// import List from '../../components/table/Table'

function Home() {
  return (
        <motion.div variants={slideVariants} initial="initial" animate="animate">
          <div className="widgets">
            <Widget type='user'/>
            <Widget type='Token Transactions'/>
            <Widget type='Token Transfer Requests'/>
          </div>

          <div className="listContainer">
            <div className="listTitle">Latest Transactions on Platform</div>
            <List/>
          </div>
        </motion.div>
  )
}

export default Home