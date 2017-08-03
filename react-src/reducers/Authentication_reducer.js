import { SIGNIN, SIGNUP } from "../actions/index";

const INITIAL_STATE = { authStatus: true, authMessage: "Not Signed In", jwt: "" };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case SIGNIN: 
			return {...state, authStatus: true, authMessage: "Signed In"}
		case SIGNUP:
			return {...state, authStatus: true, authMessage: "Account Created"}
		default:
			return state;
	}
}