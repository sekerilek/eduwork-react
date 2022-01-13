import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Articles = ({ articles }) => {
  return (
    <Container>
      <Row>
        {articles.map((artikel) => {
          return (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={artikel.urlToImage} />
                <Card.Body>
                  <Card.Title>{artikel.title}</Card.Title>
                  <Card.Text>{artikel.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{artikel.author}</ListGroupItem>
                  <ListGroupItem>{artikel.publishedAt}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Button href={artikel.url}>Read More</Button>
                </Card.Body>
              </Card>
              <br />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Articles;
