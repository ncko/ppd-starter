import React from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import Link from '@/components/Link'
import ListItem from '@material-ui/core/ListItem'
import BasicLayout from '@/layouts/BasicLayout'
import { Routes } from '@/constants'

export default function Dashboard() {
  return (
    <BasicLayout>
      <Typography variant="body1" component="p">
        Welcome! You have generated an IDIQ Boilerplate project. The TopBar has
        links to all major pages. Other pages can be found in the list below:
      </Typography>
      <List>
        <ListItem>
          <Link href={Routes.PasswordReset}>Password Reset</Link>
        </ListItem>
        <ListItem>
          <Link href={Routes.EmailUpdateConfirmation}>
            Email Update Confirmation
          </Link>
        </ListItem>
      </List>

      <Typography variant="h1" component="h1">
        Home and Dashboard
      </Typography>
      <Typography variant="h2" component="h2">
        Home and Dashboard
      </Typography>
      <Typography variant="h3" component="h3">
        Home and Dashboard
      </Typography>
      <Typography variant="h4" component="h4">
        Home and Dashboard
      </Typography>
      <Typography variant="h5" component="h5">
        Home and Dashboard
      </Typography>
      <Typography variant="h6" component="h6">
        Home and Dashboard
      </Typography>
    </BasicLayout>
  )
}
