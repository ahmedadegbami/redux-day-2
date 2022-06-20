import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromFavAction } from "../redux/actions";
import { connect, useDispatch } from "react-redux";

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromFavourite: (index) => dispatch(removeFromFavAction(index))
//   };
// };

const SingleJobs = ({ job, removeFromFavourite, index }) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between align-items-center">
      <Link to={"/" + job.company_name}>
        <ListGroup.Item key={job._id}>{job.title}</ListGroup.Item>
      </Link>

      <button
        onClick={() => dispatch(removeFromFavAction(index))}
        className="btn btn-danger"
      >
        Remove from Favourite
      </button>
    </div>
  );
};
export default SingleJobs;
// export default connect(null, mapDispatchToProps)(SingleJobs)
