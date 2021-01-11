import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { reduxFirestore, createFirestoreInstance } from 'redux-firestore'
import { firebaseConfig } from '@/constants'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.firestore()
} else {
  firebase.app()
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const firestoreEnhancer = reduxFirestore(firebase, {})

export const firebaseReduxProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true,
  },
  createFirestoreInstance,
}

export {
  firebaseReducer,
  FirebaseReducer,
  getFirebase,
  actionTypes as reactReduxFirebaseActions,
} from 'react-redux-firebase'
export {
  firestoreReducer,
  getFirestore,
  constants as reactFirestoreConstants,
} from 'redux-firestore'
