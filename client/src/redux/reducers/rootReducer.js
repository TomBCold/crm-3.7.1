import { combineReducers } from 'redux';
import driversReducer from './driversReducer';
import forwardersReducer from './forwardersReducer';
import { clientReducer } from './clientReducer';
import { contractReducer } from './contractReducer';
import { userReducer } from './userReducer';
import carTypesReducer from './carTypesReducer';

export const rootReducer = combineReducers({
  drivers: driversReducer,
  forwarders: forwardersReducer,
  clients: clientReducer,
  contracts: contractReducer,
  user: userReducer,
  carType: carTypesReducer
});
