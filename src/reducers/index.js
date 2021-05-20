import jijiReducer from './jijiReducer'
import amazonReducer from './amazonReducer'
import jumiaReducer from './jumiaReducer'
import kongaReducer from './kongaReducer'
import aliexpressReducer from './aliexpressReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    aliexpressReducer,
    jumiaReducer,
    jijiReducer,
    amazonReducer,
    kongaReducer
  });

  export default allReducers
