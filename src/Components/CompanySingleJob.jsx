import { Card, Container } from "react-bootstrap";

const CompanySingleJob = ({ job }) => {
  return (
    <Container className="mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Text>{job.type}</Card.Text>
          <h5>{job.job_type}</h5>
          <h6>{job.publication_date}</h6>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CompanySingleJob;
