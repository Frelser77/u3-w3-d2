import { FETCH_JOBS_BEGIN, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from "../action/actionType";

const initialState = {
	items: [],
	loading: false,
	error: null,
};

// Il reducer gestisce tre casi: inizio della richiesta, successo e fallimento.
export default function jobsReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_JOBS_BEGIN:
			return {
				...state,
				loading: true,
				error: null,
			};

		case FETCH_JOBS_SUCCESS:
			return {
				...state,
				loading: false,
				items: action.payload.jobs,
			};

		case FETCH_JOBS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				items: [],
			};

		default:
			return state;
	}
}
