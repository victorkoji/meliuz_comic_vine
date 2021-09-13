import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import characters from './characters';
import favorites from './favorites';

const persistConfig = {
    key: "root",
    storage
}

const reducers = combineReducers({
    characters,
    favorites
})

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { store, persistor };