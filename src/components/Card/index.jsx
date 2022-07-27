import React, { useState } from 'react'

import './styles.css'
import 'react-circular-progressbar/dist/styles.css'

import { Icon } from 'semantic-ui-react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { AnimateSharedLayout, motion } from 'framer-motion/dist/framer-motion'
import ChartComponent from 'components/Chart'

const CardComponent = (props) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <CardExpandedComponent props={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CardCompactComponent props={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  )
}

const CardCompactComponent = ({ props, setExpanded }) => {
  const { title, color, barValue, value, icon } = props

  return (
    <motion.div
      className="CardCompact"
      style={{ background: color.backGround, boxShadow: color.boxShadow }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="RadialBar">
        <CircularProgressbar value={barValue} text={`${barValue}%`} />
        <span>{title}</span>
      </div>
      <div className="Details">
        <Icon name={icon} />
        <span>{value}</span>
        <span>Last 7 Days</span>
      </div>
    </motion.div>
  )
}

// const CardExpandedComponent = ({ title, color, barValue, value, icon, series }) => {}
const CardExpandedComponent = ({ props, setExpanded }) => {
  const { title, color, chart } = props

  return (
    <motion.div
      className="CardExpanded"
      style={{ background: color.backGround, boxShadow: color.boxShadow }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <Icon name={'close'} style={{ alignSelf: 'flex-end', cursor: 'pointer', color: 'white' }} />
      <div className="CardExpandedDetails">
        <span>{title}</span>
        <div className="ChartContainer">
          <ChartComponent chart={chart} />
        </div>
        <span>Last 7 Days</span>
      </div>
    </motion.div>
  )
}

export default CardComponent
