import React, { ReactNode } from 'react'
import Container from '@material-ui/core/Container'

import TopBar, { TopBarItem, TopBarNav } from '@/components/TopBar'
import Link from '@/components/Link'
import { Routes } from '@/constants'

interface Props {
  children: ReactNode
}

export default function BasicLayout({ children }: Props) {
  return (
    <>
      <TopBar>
        <TopBarNav>
          <TopBarItem>
            <Link href={Routes.Home}>Home</Link>
          </TopBarItem>
          <TopBarItem>
            <Link href={Routes.Dashboard}>Dashboard</Link>
          </TopBarItem>
          <TopBarItem>
            <Link href={Routes.Enrollment}>Enrollment</Link>
          </TopBarItem>
        </TopBarNav>
        <TopBarNav>
          <TopBarItem>
            <Link href={Routes.SignUp}>Sign Up</Link>
          </TopBarItem>
          <TopBarItem>
            <Link href={Routes.SignIn}>Sign In</Link>
          </TopBarItem>
          <TopBarItem>
            <Link href={Routes.AccountSettings}>Account Settings</Link>
          </TopBarItem>
        </TopBarNav>
      </TopBar>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  )
}
