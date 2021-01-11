import React, { FunctionComponent, ReactNode } from 'react'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import SmallScreenSubMenu from './SmallScreenSubMenu'
import SmallScreenSubMenuItem from './SmallScreenSubMenuItem'
import { Theme } from '../../theme'

interface SmallScreenTopBarItemProps {
  submenuTitle?: string
  type?: 'submenu' | 'menu'
  children: ReactNode
}

const useStyles = makeStyles(({ palette, typography }: Theme) => {
  return createStyles({
    anchors: {
      '& a, & button': {
        color: palette.text.primary,
        fontWeight: typography.fontWeightRegular,
      },
    },
  })
})

const SmallScreenTopBarItem: FunctionComponent<SmallScreenTopBarItemProps> = ({
  submenuTitle,
  type,
  children,
}: SmallScreenTopBarItemProps) => {
  const classes = useStyles()
  const isSubmenu = type === 'submenu'

  return isSubmenu ? (
    <SmallScreenSubMenu title={submenuTitle}>
      {React.Children.map(children, (child) => {
        return (
          <SmallScreenSubMenuItem>
            <ListItemText className={classes.anchors}>{child}</ListItemText>
          </SmallScreenSubMenuItem>
        )
      })}
    </SmallScreenSubMenu>
  ) : (
    <ListItem className={classes.anchors}>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  )
}

export default SmallScreenTopBarItem
