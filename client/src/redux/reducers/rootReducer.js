import { combineReducers } from 'redux';
import { clientReducer } from './clientReducer';
import { contractReducer } from './contractReducer';

export const rootReducer = combineReducers({
  clients: clientReducer,
  contracts: contractReducer
});
