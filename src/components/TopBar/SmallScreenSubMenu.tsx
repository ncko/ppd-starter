import React, { FunctionComponent, ReactNode, useState } from 'react'
import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

interface SubMenuProps {
  title?: string
  children: ReactNode
}

const SmallScreenSubMenu: FunctionComponent<SubMenuProps> = ({
  title,
  children,
}: SubMenuProps) => {
  const [open, setOpen] = useState(false)
  const toggleSubMenu = (): void => setOpen(!open)

  return (
    <>
      <ListItem onClick={toggleSubMenu}>
        <ListItemText>{title}</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open}>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  )
}

export default SmallScreenSubMenu
