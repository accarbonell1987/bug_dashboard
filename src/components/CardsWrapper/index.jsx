import React from 'react'

import './styles.css'
import { CardComponent } from 'components'

const CardsWrapperComponent = (props) => {
  const { cards } = props
  return (
    <div className="Cards">
      {cards.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <CardComponent
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              icon={card.icon}
              series={card.series}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CardsWrapperComponent
