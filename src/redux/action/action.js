// actions.js
import {
	FETCH_JOBS_BEGIN,
	FETCH_JOBS_FAILURE,
	FETCH_JOBS_SUCCESS,
	ADD_TO_FAVOURITE,
	REMOVE_FROM_FAVOURITE,
} from "./actionType";

// ADD FAVOURITE
export const addToFavourite = (item) => ({
	type: ADD_TO_FAVOURITE,
	payload: item,
});

export const removeFromFavourite = (item) => ({
	type: REMOVE_FROM_FAVOURITE,
	payload: item,
});

// FETCH
export const fetchJobsBegin = () => ({
	type: FETCH_JOBS_BEGIN,
	isLoading: true,
});

export const fetchJobsSuccess = (jobs) => ({
	type: FETCH_JOBS_SUCCESS,
	isLoading: false,
	payload: jobs,
});

export const fetchJobsFailure = (error) => ({
	type: FETCH_JOBS_FAILURE,
	payload: error,
});
