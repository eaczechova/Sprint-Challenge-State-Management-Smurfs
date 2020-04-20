import { FETCH_DATA, DATA_SUCCESS, DATA_ERROR, POST_DATA } from '../actions';

export const initialState = {
	smurfs: [],
	isLoading: false,
	error: '',
};

export const fetchReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state,
				isLoading: true,
			};
		case POST_DATA:
			return {
				...state,
				smurfs: action.payload,
			};
		case DATA_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				isLoading: false,
			};
		case DATA_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
