import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleJobFav from "./SingleJobFav";

// const mapStateToProps = (state) => ({
//   favorites: state.favourite.content
// });
// const FavouritePage = ({ favorites }) => {

const FavouritePage = () => {
  const params = useParams();

  const favorites = useSelector((state) => state.favourite.content);

  return (
    <Container>
      <Row>
        <Col>
          <h1>LIST OF FAVOURITE JOBS {params.fav}</h1>
          <ListGroup>
            {favorites.map((job, i) => (
              <SingleJobFav index={i} key={job._id} job={job} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default FavouritePage;

// export default connect(mapStateToProps, null)(FavouritePage);
