import { combineReducers } from 'redux';
import SaveInforUserReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    saveInfoUser: SaveInforUserReducer,
});

export default rootReducer;
