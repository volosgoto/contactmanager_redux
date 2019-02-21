import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

export default combineReducers({
  contact: contactReducer // avilable by this.props.state
});
