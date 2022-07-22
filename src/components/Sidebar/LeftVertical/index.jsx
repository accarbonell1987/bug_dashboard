import React, { useState } from 'react'
import { Label, Menu, Icon } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

const MenuLeftVerticalComponent = ({ size, isVertical, menuItems }) => {
  const navigation = useHistory()
  const activeItem = menuItems.find((p) => p.default) || null

  const [active, setActive] = useState({ item: activeItem.name, color: 'teal' })

  const handleItemClick = (e, { name }) => {
    setActive({ item: name, color: 'teal' })
    navigation.push(name)
  }

  return (
    <Menu size={size} vertical={isVertical} icon>
      {menuItems.map((item, index) => (
        <Menu.Item key={index} name={item.name} active={active.item === item.name} onClick={handleItemClick}>
          <Label color={active.item === item.name ? active.color : item.color}>
            <Icon name={item.icon || 'minus'} />
            {item.count}
          </Label>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default MenuLeftVerticalComponent
