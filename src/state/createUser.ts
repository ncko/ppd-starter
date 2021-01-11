import { createAsyncThunk } from '@reduxjs/toolkit'
import { ExtendedFirebaseInstance } from 'react-redux-firebase'
import firebase from 'firebase'
type UserCredential = firebase.auth.UserCredential

interface Props {
  email: string
  password: string
}

interface Extras {
  getFirebase: () => ExtendedFirebaseInstance
}

export async function createUserWithEmailAndPassword(
  args: Props,
  { extra, rejectWithValue }
) {
  const { email, password } = args
  const { getFirebase } = extra
  const auth = getFirebase().auth()

  try {
    return await auth.createUserWithEmailAndPassword(email, password)
  } catch (error) {
    return rejectWithValue(error.message)
  }
}

export const createUser = createAsyncThunk<
  UserCredential,
  Props,
  { extra: Extras }
>('auth/createUser', createUserWithEmailAndPassword)
