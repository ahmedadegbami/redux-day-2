import { ListGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToFavAction } from "../redux/actions";
import { connect, useDispatch, useSelector } from "react-redux";

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToFavourite: (job) => dispatch(addToFavAction(job))
//   };
// };

const SingleJobs = ({ job }) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <Link to={"/" + job.company_name}>
        <ListGroup.Item key={job._id}>{job.title}</ListGroup.Item>
      </Link>
      {userName && (
        <button
          onClick={() => dispatch(addToFavAction(job))}
          className="btn btn-info"
        >
          Add to Favourite
        </button>
      )}
    </div>
  );
};

export default SingleJobs;
