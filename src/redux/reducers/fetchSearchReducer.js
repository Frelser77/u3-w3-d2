import { fetchJobsBegin, fetchJobsSuccess, fetchJobsFailure } from "../action/action";

export function fetchJobs(query) {
	return async (dispatch) => {
		dispatch(fetchJobsBegin());
		try {
			const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const { data } = await response.json();
			dispatch(fetchJobsSuccess(data));
		} catch (error) {
			dispatch(fetchJobsFailure(error));
		}
	};
}
