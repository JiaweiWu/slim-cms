import { combineReducers } from 'redux';

import AuthReducer from './Authentication_reducer';

const rootReducer = combineReducers({
	authState: AuthReducer
});

export default rootReducer;