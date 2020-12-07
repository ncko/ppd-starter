import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit'
import {
  firebaseReducer,
  FirebaseReducer,
  firestoreReducer,
  firestoreEnhancer,
  getFirebase,
  getFirestore,
  reactReduxFirebaseActions,
  reactFirestoreConstants,
} from './firebase'

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
        ignoredActions: [
          // just ignore every redux-firebase and react-redux-firebase action type
          ...Object.keys(reactFirestoreConstants.actionTypes).map(
            (type) => `${reactFirestoreConstants.actionsPrefix}/${type}`
          ),
          ...Object.keys(reactReduxFirebaseActions).map(
            (type) => `@@reactReduxFirebase/${type}`
          ),
        ],
        ignoredPaths: ['firebase', 'firestore'],
      },
      thunk: {
        extraArgument: {
          getFirebase,
          getFirestore,
        },
      },
    }),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
