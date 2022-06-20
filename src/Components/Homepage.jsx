import { Container, ListGroup, Form, Spinner, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import SingleJobs from "./SingleJobs";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getJobsAction, getUserNameAction } from "../redux/actions";
import Pagination from "./Pagination";

// value
// mapStateToProps = (state) => ({
//   favLength: state.favourite.content.length,
//   jobs: state.jobs.list,
//   areJobsLoading: state.jobs.isLoading,
//   isThereError: state.jobs.isError
// });

// const mapDispatchToProps = (dispatch) => ({
//   getJobs: (url) => dispatch(getJobsAction(url))
// });

// const Homepage = ({
//   favLength,
//   getJobs,
//   jobs,
//   areJobsLoading,
//   isThereError
// }) => {

const Homepage = () => {
  const favLength = useSelector((state) => state.favourite.content.length);
  const jobs = useSelector((state) => state.jobs.list);
  const areJobsLoading = useSelector((state) => state.jobs.isLoading);
  const isThereError = useSelector((state) => state.jobs.isError);
  const userName = useSelector((state) => state.user.name);

  const dispatch = useDispatch();

  // const [state, setState] = useState([]); // mapstate to props
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [inputName, setInputName] = useState("");

  //Pagination https://blog.logrocket.com/pagination-components-react-tailwind-css/
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    let url;
    if (searchBy !== "Search by") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?category=${searchBy}&limit=100`;
    }
    if (search !== "") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=100`;
    }
    if (search === "" && searchBy === "Search by") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?limit=100`;
    }
    if (search !== "" && searchBy !== "Search by") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?category=${searchBy}&search=${search}&limit=100`;
    }
    dispatch(getJobsAction(url));
  }, [search, searchBy]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost);

  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-end">
        {!userName ? (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(getUserNameAction(inputName));
            }}
          >
            <Form.Group />
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </Form>
        ) : (
          <>
            <h4 className="mr-2">Welcome {userName + "!"} </h4>
            <Link to={"/favourite"}>
              <button type="button" className="btn btn-primary">
                Favourites{" "}
                <span className="badge badge-light">{favLength}</span>
              </button>
            </Link>
          </>
        )}
      </div>
      <Form.Label>Example select</Form.Label>
      <Form.Group
        controlId="exampleForm.ControlSelect1"
        onChange={(e) => setSearchBy(e.target.value)}
      >
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
          {currentPosts.map((job) => (
            <SingleJobs key={job._id} job={job} />
          ))}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={jobs.length}
            paginateBack={paginateBack}
            paginateFront={paginateFront}
            currentPage={currentPage}
          />
        </ListGroup>
      )}
    </Container>
  );
};

export default Homepage;
// export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
