import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const fbConfig = {}

firebase.initializeApp(fbConfig)
firebase.firestore()

export { firebaseReducer, firestoreReducer } from 'react-redux-firebase'

export const firebaseReduxProps = {
  firebase,
  config: {
    userProfile: 'users',
    userFirestoreForProfile: true,
  },
}
