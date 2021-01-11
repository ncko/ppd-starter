import { RootState } from '@/state'

export const selectAuth = (state: RootState) => state.firebase.auth
