import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { removeFromFavAction } from "../redux/actions"
import { connect } from "react-redux"
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavourite: (job) => dispatch(removeFromFavAction(job)),
  }
}

const SingleJobs = ({ job, removeFromFavourite, index }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Link to={"/" + job.company_name}>
        <ListGroup.Item key={job._id}>{job.title}</ListGroup.Item>
      </Link>

      <button
        onClick={() => removeFromFavourite(index)}
        className="btn btn-danger"
      >
        Remove from Favourite
      </button>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(SingleJobs)
