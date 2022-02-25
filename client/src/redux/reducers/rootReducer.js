import { combineReducers } from 'redux';
import driversReducer from './driversReducer';
import forwardersReducer from './forwardersReducer';
import { clientReducer } from './clientReducer';
import { contractReducer } from './contractReducer';

export const rootReducer = combineReducers({
  drivers: driversReducer,
  forwarders: forwardersReducer,
  clients: clientReducer,
  contracts: contractReducer
});
