import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { addToFavAction } from "../redux/actions"
import { connect } from "react-redux"
const mapDispatchToProps = (dispatch) => {
  return {
    addToFavourite: (job) => dispatch(addToFavAction(job)),
  }
}

const SingleJobs = ({ job, addToFavourite }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Link to={"/" + job.company_name}>
        <ListGroup.Item key={job._id}>{job.title}</ListGroup.Item>
      </Link>

      <button onClick={() => addToFavourite(job)} className="btn btn-info">
        Add to Favourite
      </button>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(SingleJobs)
