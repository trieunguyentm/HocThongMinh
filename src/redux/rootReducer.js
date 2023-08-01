import { combineReducers } from 'redux';
import SaveInfoUserReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    saveInfoUser: SaveInfoUserReducer,
});

export default rootReducer;
