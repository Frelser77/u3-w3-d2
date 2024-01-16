import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../redux/reducers/fetchSearchReducer";

const MainSearch = () => {
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();
	const jobs = useSelector((state) => state.jobs.data);
	const isLoading = useSelector((state) => state.jobs.loading);
	const error = useSelector((state) => state.jobs.error);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(fetchJobs(query));
	};

	useEffect(() => {
		// if (query) {
		dispatch(fetchJobs(query));
		// }
	}, [dispatch, query]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<Container>
			<Row>
				<Col xs={10} className="mx-auto my-3">
					<h1>Remote Jobs Search</h1>
					<Button onClick={() => navigate("/favourites")}>Favourites</Button>
				</Col>
				<Col xs={10} className="mx-auto">
					<Form onSubmit={handleSubmit}>
						<Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
					</Form>
				</Col>
				<Col xs={10} className="mx-auto mb-5">
					{jobs.map((jobData) => (
						<Job key={jobData._id} data={jobData} />
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default MainSearch;
