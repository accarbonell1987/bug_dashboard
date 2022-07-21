import React, { useState } from 'react'

import './styles.css'
import 'react-circular-progressbar/dist/styles.css'

import { Icon } from 'semantic-ui-react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { AnimateSharedLayout } from 'framer-motion/dist/framer-motion'

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
    <div
      className="CardCompact"
      style={{ background: color.backGround, boxShadow: color.boxShadow }}
      onClick={setExpanded}
    >
      <div className="RadialBar">
        <CircularProgressbar value={barValue} text={`${barValue}%`} />
        <span>{title}</span>
      </div>
      <div className="Details">
        <Icon name={icon} />
        <span>{value}</span>
        <span>Last 24 Hours</span>
      </div>
    </div>
  )
}

// const CardExpandedComponent = ({ title, color, barValue, value, icon, series }) => {}
const CardExpandedComponent = () => {}

export default CardComponent
