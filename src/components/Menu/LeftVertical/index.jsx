import React, { useState } from 'react'
import { Label, Menu } from 'semantic-ui-react'

const MenuLeftVerticalComponent = ({ size, isVertical, menuItems }) => {
  //buscar item activo para marcarlo
  const activeItem = menuItems.find((p) => p.default) || null

  const [active, setActive] = useState({ item: activeItem.name, color: 'teal' })

  const handleItemClick = (e, { name }) => setActive({ item: name, color: 'teal' })

  return (
    <Menu size={size} vertical={isVertical}>
      {menuItems.map((item, index) => (
        <Menu.Item key={index} name={item.name} active={active.item === item.name} onClick={handleItemClick}>
          <Label color={active.item === item.name ? active.color : item.color}>{item.count}</Label>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default MenuLeftVerticalComponent
