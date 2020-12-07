import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/state'
import { isLoaded } from 'react-redux-firebase'
import { CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

function AuthIsLoaded({ children }) {
  const classes = useStyles()
  const auth = useSelector((state: RootState) => state.firebase.auth)
  if (!isLoaded(auth))
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    )
  return children
}

export default AuthIsLoaded
