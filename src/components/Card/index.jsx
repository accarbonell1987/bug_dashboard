import React, { useState } from 'react'

import './styles.css'
import 'react-circular-progressbar/dist/styles.css'

import { Icon } from 'semantic-ui-react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { AnimateSharedLayout, motion } from 'framer-motion/dist/framer-motion'
import Chart from 'react-apexcharts'

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
        <span>Last 24 Hours</span>
      </div>
    </motion.div>
  )
}

// const CardExpandedComponent = ({ title, color, barValue, value, icon, series }) => {}
const CardExpandedComponent = ({ props, setExpanded }) => {
  const { title, color, series } = props

  const data = {
    options: {
      chart: {
        type: 'area',
        height: 'auto',
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35,
      },
      fill: {
        colors: ['#fff'],
        type: 'gradient',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        color: ['white'],
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy HH:mm',
        },
      },
      grid: {
        show: true,
      },
      xasis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:00:00.000Z',
          '2018-09-19T02:00:00.000Z',
          '2018-09-19T03:00:00.000Z',
          '2018-09-19T04:00:00.000Z',
          '2018-09-19T05:00:00.000Z',
          '2018-09-19T06:00:00.000Z',
        ],
      },
    },
  }

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
          <Chart series={series} type={'area'} options={data.options} />
        </div>
        <span>Last 24 Hours</span>
      </div>
    </motion.div>
  )
}

export default CardComponent
