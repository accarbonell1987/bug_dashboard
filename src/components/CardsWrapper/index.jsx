import React from 'react'

import './styles.css'
import { CardComponent } from 'components'

const CardsWrapperComponent = (props) => {
  const { cards } = props

  return (
    <div className="Cards">
      {cards.map((card, id) => {
        const chart = {
          type: card.type,
          series: card.series,
          categories: card.categories,
          labels: card.labels,
        }
        return (
          <div className="parentContainer" key={id}>
            <CardComponent
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              icon={card.icon}
              chart={chart}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CardsWrapperComponent
