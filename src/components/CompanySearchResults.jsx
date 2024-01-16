import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { NavLink, useParams } from "react-router-dom";

const CompanySearchResults = () => {
	const [jobs, setJobs] = useState([]);
	const params = useParams();

	const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

	useEffect(() => {
		getJobs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getJobs = async () => {
		try {
			const response = await fetch(baseEndpoint + params.companyName);
			if (response.ok) {
				const { data } = await response.json();
				setJobs(data);
			} else {
				alert("Error fetching results");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Row>
				<Col>
					<NavLink
						className="nav-link btn btn-primary mt-5 mb-3 text-light"
						style={{ height: "30px", width: "60px" }}
						to={"/"}
					>
						Home
					</NavLink>
					{jobs.map((jobData) => (
						<Job key={jobData._id} data={jobData} />
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default CompanySearchResults;
