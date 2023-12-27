import { combineReducers, configureStore } from '@reduxjs/toolkit'
import general from './general.slice';


const rootReducer = combineReducers({
    general: general,
});

const store = configureStore({
    reducer: rootReducer,
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch