import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit'
import { auth } from './auth'
import { firebaseReducer, firestoreReducer } from './firebase'

const rootReducer = combineReducers({
  auth: auth.reducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
