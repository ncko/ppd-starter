import React, { FunctionComponent, ReactElement, ReactNode } from 'react'
import LargeScreenSubMenu from './LargeScreenSubMenu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles } from '@material-ui/styles'
import cx from 'classnames'
import { Theme } from '../../theme'

interface LargeScreenTopBarItemProps {
  type?: 'submenu' | 'menu'
  submenuTitle?: string
  icon?: ReactElement
  children: ReactNode
}

const useStyles = makeStyles(
  ({ palette, spacing, typography: { pxToRem } }: Theme) =>
    createStyles({
      root: {
        '& a': {
          color: palette.common.white,
        },
      },
      link: {
        paddingLeft: pxToRem(spacing(3)),
        paddingRight: pxToRem(spacing(3)),
        '&:first-of-type': {
          marginLeft: pxToRem(spacing(3)),
        },
      },
    })
)

const LargeScreenTopBarItem: FunctionComponent<LargeScreenTopBarItemProps> = ({
  submenuTitle,
  type,
  children,
  icon,
}: LargeScreenTopBarItemProps) => {
  const classes = useStyles()
  const isSubmenu = type === 'submenu'

  return isSubmenu ? (
    <LargeScreenSubMenu title={submenuTitle} icon={icon}>
      {React.Children.map(children, (child) => {
        return <MenuItem>{child}</MenuItem>
      })}
    </LargeScreenSubMenu>
  ) : (
    <Button
      component="span"
      color="inherit"
      className={cx(classes.link, classes.root)}
    >
      {children}
    </Button>
  )
}

export default LargeScreenTopBarItem
