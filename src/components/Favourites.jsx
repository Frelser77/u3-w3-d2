import { Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Favourites = () => {
	const favourites = useSelector((state) => state.favourite.list);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	return (
		<Container>
			<Row>
				<Col xs={10} className="mx-auto my-3">
					<h1>Favourites</h1>
					<Button onClick={() => navigate("/")}>Home</Button>
				</Col>
				<Col xs={10} className="mx-auto my-3">
					{favourites.length === 0 ? (
						<div className="h4 text-center text-danger btn btn-dark fs-4">Non ci sono preferiti al momento.</div>
					) : (
						<ListGroup>
							{favourites.map((fav, i) => (
								<ListGroupItem key={i}>
									<StarFill
										className="mr-2"
										onClick={() =>
											dispatch({
												type: "REMOVE_FROM_FAVOURITE",
												payload: fav,
											})
										}
									/>
									<Link to={"/" + fav}>{fav}</Link>
								</ListGroupItem>
							))}
						</ListGroup>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default Favourites;
