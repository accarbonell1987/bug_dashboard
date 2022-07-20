import React, { useState } from 'react'
import { Label, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const MenuLeftVerticalComponent = ({ size, isVertical, menuItems }) => {
  // const location = useLocation()
  // const currentPath = location.pathname.split('/')[1]

  //buscar item activo para marcarlo
  const activeItem = menuItems.find((p) => p.default) || null

  // const setActive = (path) => (currentPath === path ? `ant-menu-item-selected` : 'ant-menu-item');

  const [active, setActive] = useState({ item: activeItem.name, color: 'teal' })

  const handleItemClick = (e, { name }) => {
    setActive({ item: name, color: 'teal' })
  }

  return (
    <Menu size={size} vertical={isVertical} icon>
      {menuItems.map((item, index) => (
        <Menu.Item key={index} name={item.name} active={active.item === item.name} onClick={handleItemClick}>
          <Label color={active.item === item.name ? active.color : item.color}>
            <Icon name={item.icon || 'minus'} />
            <NavLink to={`/${item.name}`}>{item.count}</NavLink>
          </Label>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default MenuLeftVerticalComponent
