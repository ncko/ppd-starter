import React, { FunctionComponent, ReactElement, ReactNode } from 'react'
import { createStyles, makeStyles } from '@material-ui/styles'
import SmallScreenBar from './SmallScreenBar'
import LargeScreenBar from './LargeScreenBar'
import SmallScreenTopBarItem from './SmallScreenTopBarItem'
import LargeScreenTopBarItem from './LargeScreenTopBarItem'

const useStyles = makeStyles(() =>
  createStyles({
    topBar: {
      display: 'flex',
    },
    grow: {
      flexGrow: 1,
    },
  })
)

interface TopBarNavProps {
  children?: ReactNode
}

export const TopBarNav: FunctionComponent<TopBarNavProps> = ({
  children,
}: TopBarNavProps) => <>{children}</>

interface TopBarItemProps {
  type?: 'submenu' | 'menu'
  submenuTitle?: string
  icon?: ReactElement
  children: ReactNode
}

export const TopBarItem: FunctionComponent<TopBarItemProps> = ({
  children,
}: TopBarItemProps) => <>{children}</>

interface Props {
  children: ReactNode
}

const TopBar: FunctionComponent<Props> = ({ children }: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.topBar}>
      <SmallScreenBar>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            return child
          }

          return React.Children.map(child.props.children, (grandchild) => {
            if (!React.isValidElement(grandchild)) {
              return grandchild
            }
            const grandChildProps: TopBarItemProps = grandchild.props as TopBarItemProps

            return grandChildProps.type === 'submenu' ? (
              <SmallScreenTopBarItem
                type="submenu"
                submenuTitle={grandChildProps.submenuTitle}
              >
                {grandChildProps.children}
              </SmallScreenTopBarItem>
            ) : (
              <SmallScreenTopBarItem>
                {grandChildProps.children}
              </SmallScreenTopBarItem>
            )
          })
        })}
      </SmallScreenBar>
      <LargeScreenBar>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return child
          }
          const length = React.Children.count(children)
          const lastChild = index >= length - 1

          return (
            <>
              {React.Children.map(child.props.children, (grandchild) => {
                if (!React.isValidElement(grandchild)) {
                  return grandchild
                }
                const grandChildProps: TopBarItemProps = grandchild.props as TopBarItemProps

                return grandChildProps.type === 'submenu' ? (
                  <LargeScreenTopBarItem
                    type="submenu"
                    submenuTitle={grandChildProps.submenuTitle}
                    icon={grandChildProps.icon}
                  >
                    {grandChildProps.children}
                  </LargeScreenTopBarItem>
                ) : (
                  <LargeScreenTopBarItem>
                    {grandChildProps.children}
                  </LargeScreenTopBarItem>
                )
              })}
              {lastChild ? null : <div className={classes.grow} />}
            </>
          )
        })}
      </LargeScreenBar>
    </div>
  )
}

export default TopBar
