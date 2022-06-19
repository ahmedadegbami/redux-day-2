import { Container, ListGroup, Form, Spinner, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import SingleJobs from "./SingleJobs";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getJobsAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  favLength: state.favourite.content.length,
  jobs: state.jobs.list,
  areJobsLoading: state.jobs.isLoading,
  isThereError: state.jobs.isError
});

const mapDispatchToProps = (dispatch) => ({
  getJobs: (url) => dispatch(getJobsAction(url))
});

const Homepage = ({
  favLength,
  getJobs,
  jobs,
  areJobsLoading,
  isThereError
}) => {
  // const [state, setState] = useState([]); // mapstate to props
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("");

  console.log("what??", areJobsLoading);

  useEffect(() => {
    let url;
    if (searchBy !== "Search by") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?category=${searchBy}&limit=10`;
    }
    if (search !== "") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`;
    }
    if (search === "" && searchBy === "Search by") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?limit=10`;
    }
    if (search !== "" && searchBy !== "Search by") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?category=${searchBy}&search=${search}&limit=10`;
    }
    getJobs(url);
  }, [search, searchBy, getJobs]);

  return (
    <Container className="mt-5">
      <Form.Group
        controlId="exampleForm.ControlSelect1"
        onChange={(e) => setSearchBy(e.target.value)}
      >
        <div className="d-flex justify-content-between">
          <Form.Label>Example select</Form.Label>
          <Link to={"/favourite"}>
            <button type="button" className="btn btn-primary">
              Favourites <span className="badge badge-light">{favLength}</span>
            </button>
          </Link>
        </div>
        <Form.Control as="select">
          <option>Search by</option>
          <option value={"All others"}>All others</option>
          <option value={"Business"}>Data</option>
          <option value={"Customer Service"}>Service</option>
          <option value={"Data"}>Data</option>
          <option value={"Design"}>Design</option>
          <option value={"DevOps / Sysadmin"}>DevOps / Sysadmin</option>
          <option value={"Finance / Legal"}>Finance / Legal</option>
          <option value={"Human Resources"}>Human Resources</option>
          <option value={"Marketing"}>Marketing</option>
          <option value={"Product"}>Product</option>
          <option value={"QA"}>QA</option>
          <option value={"Sales"}>Sales</option>
          <option value={"Software Development"}>Software Development</option>
          <option value={"Teaching"}>Teaching</option>
          <option value={"Writing"}>Writing</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Search</Form.Label>

        <Form.Control
          type="search"
          placeholder="search job"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
        // onClick={fetchData}
        >
          Search
        </button>
      </Form.Group>

      <h1>JOB LISTS</h1>
      {areJobsLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : isThereError ? (
        <Alert variant="danger">Error</Alert>
      ) : (
        <ListGroup>
          {jobs.map((job) => (
            <SingleJobs key={job.id} job={job} />
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
