import React, { FunctionComponent, ReactNode, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import { createStyles, makeStyles } from '@material-ui/styles'

import { Images, Routes } from '@/constants'
import Link from '@/components/Link'
import { Theme } from '@/theme'

const useStyles = makeStyles(({ spacing, typography: { pxToRem } }: Theme) =>
  createStyles({
    toolbar: {
      position: 'relative',
      justifyContent: 'center',
    },
    iconButton: {
      position: 'absolute',
      right: pxToRem(spacing(2)),
      top: pxToRem(spacing(1)),
      boxShadow: 'none',
    },
  })
)

interface Props {
  children: ReactNode
}

const SmallScreenBar: FunctionComponent<Props> = ({ children }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const classes = useStyles()
  const toggleMobile = (): void => setMobileOpen(!mobileOpen)

  return (
    <Hidden mdUp>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link href={Routes.Dashboard}>
            <img src={Images.TopBarLogo} alt={Images.TopBarLogoAlt} />
          </Link>
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="end"
            onClick={toggleMobile}
            className={classes.iconButton}
            data-testid="mobile-menu-btn"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav aria-label="menu">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="top"
            open={mobileOpen}
            onClose={toggleMobile}
            ModalProps={{ keepMounted: true }}
          >
            <List>{children}</List>
          </Drawer>
        </Hidden>
      </nav>
    </Hidden>
  )
}

export default SmallScreenBar
