# PPD-Starter

## Notes

### Strategy on async requests

There are 3 categories of requests:

1. Calls to firebase
2. Calls to backend
3. Calls to backend that need to be synced with firebase

Calls in 1 are safe to be made from a component (e.g. inside an onSubmit handler). Calls in both 2 and 3 need to be made from inside of a useEffect hook or asynchronous redux action.

New devs will have to understand the distinction between these different requests, and know how to treat each one. Instead of placing that expectation on them, all async requests should be placed behind async redux actions, even if they don't need to be. For example:

- `dispatch(signIn({ email, password }))`
- `dispatch(signUp({ email, password }))`
- `dispatch(signOut())`
- `dispatch(enroll({ member }))`

### TODO

- MirageJS to mock api calls
- Setup firebase emulator
