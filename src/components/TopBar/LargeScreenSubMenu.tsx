import React, {
  FunctionComponent,
  MouseEvent,
  ReactElement,
  ReactNode,
  useState,
} from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles } from '@material-ui/styles'
import { Theme } from '../../theme'

const useStyles = makeStyles(
  ({ palette, spacing, typography: { pxToRem, fontWeightRegular } }: Theme) =>
    createStyles({
      link: {
        paddingLeft: pxToRem(spacing(3)),
        paddingRight: pxToRem(spacing(3)),
        '&:first-of-type': {
          marginLeft: pxToRem(spacing(3)),
        },
      },
      iconButton: {
        boxShadow: 'none',
      },
      anchor: {
        '& a': {
          color: palette.text.primary,
          fontWeight: fontWeightRegular,
        },
      },
    })
)

interface Props {
  title?: string
  icon?: ReactElement
  children: ReactNode
}

const LargeScreenSubMenu: FunctionComponent<Props> = ({
  icon,
  title,
  children,
}: Props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isOpen = Boolean(anchorEl)
  const handleMenuOpen = (event: MouseEvent<HTMLElement>): void =>
    setAnchorEl(event.currentTarget)
  const handleMenuClose = (): void => setAnchorEl(null)

  const btn: ReactElement = icon ? (
    <>
      <IconButton
        color="inherit"
        className={classes.iconButton}
        onClick={handleMenuOpen}
      >
        {icon}
      </IconButton>
    </>
  ) : (
    <>
      <Button
        component="span"
        color="inherit"
        className={classes.link}
        onClick={handleMenuOpen}
      >
        {title}
      </Button>
    </>
  )

  return (
    <>
      {btn}
      <Menu
        open={isOpen}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        disableScrollLock={true}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as ReactElement, {
            onClick: handleMenuClose,
            className: classes.anchor,
          })
        })}
      </Menu>
    </>
  )
}

export default LargeScreenSubMenu
