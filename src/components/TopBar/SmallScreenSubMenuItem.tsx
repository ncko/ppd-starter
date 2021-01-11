import React, { FunctionComponent, ReactNode } from 'react'
import ListItem from '@material-ui/core/ListItem'
import { createStyles, makeStyles } from '@material-ui/styles'
import { Theme } from '../../theme'

interface SubMenuItemProps {
  children: ReactNode
}

const useStyles = makeStyles(({ spacing, typography: { pxToRem } }: Theme) =>
  createStyles({
    nested: {
      paddingLeft: pxToRem(spacing(4)),
    },
  })
)

const SmallScreenSubMenuItem: FunctionComponent<SubMenuItemProps> = ({
  children,
}: SubMenuItemProps) => {
  const classes = useStyles()

  return <ListItem className={classes.nested}>{children}</ListItem>
}

export default SmallScreenSubMenuItem
