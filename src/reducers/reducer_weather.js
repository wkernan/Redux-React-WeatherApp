import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
	case FETCH_WEATHER:
		return [ action.payload.data, ...state ]; // spread function for new array for state, not mutated like if I used .push()
	}

	return state;
}