import { combineReducers } from 'redux';
import driversReducer from './driversReducer';
import forwardersReducer from './forwardersReducer';

export const rootReducer = combineReducers({
  drivers: driversReducer,
  forwarders: forwardersReducer
});
