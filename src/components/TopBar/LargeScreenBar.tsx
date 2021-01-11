import React, { FunctionComponent, ReactNode } from 'react'
import Hidden from '@material-ui/core/Hidden'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import { createStyles, makeStyles } from '@material-ui/styles'

import Link from '@/components/Link'
import { Images, Routes } from '@/constants'

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
    },
  })
)

interface Props {
  children: ReactNode
}

const LargeScreenBar: FunctionComponent<Props> = ({ children }: Props) => {
  const classes = useStyles()

  return (
    <Hidden smDown>
      <AppBar position="static">
        <Toolbar>
          <Container className={classes.container}>
            <Link href={Routes.Dashboard}>
              <img src={Images.TopBarLogo} alt={Images.TopBarLogoAlt} />
            </Link>
            {children}
          </Container>
        </Toolbar>
      </AppBar>
    </Hidden>
  )
}

export default LargeScreenBar
