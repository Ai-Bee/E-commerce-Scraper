import { createStore } from 'redux'
import jijiReducer from './reducers/jijiReducer'


function configureStore(state = { dataArray: [] }) {
    return createStore(jijiReducer,state);
  }
  
  export default configureStore;