import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit'
import {
  firebaseReducer,
  firestoreReducer,
  firestoreEnhancer,
} from './firebase'
import { FirebaseReducer } from 'react-redux-firebase'

interface Profile {
  email: string
}

interface RootReducerState {
  firebase: FirebaseReducer.Reducer<Profile>
  firestore: any
}

const rootReducer = combineReducers<RootReducerState>({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  enhancers: [firestoreEnhancer],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['@@reactReduxFirebase/LOGIN'],
        ignoredPaths: ['auth', 'profile.token', 'firebase.profile.token'],
      },
    }),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
