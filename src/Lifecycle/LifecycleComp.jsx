import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

class LifecycleComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      keyword: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this._fetchData();
  }
  async _fetchData() {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=cf961da6d12542ebb77dd016a8c28fc4`
      );
      const data = await response.json();
      this.setState({ data: data.articles });
    } catch (err) {
      console.log(err);
    }
  }

  async _fetchSearch(param) {
    //console.log(param);
    if (param === "") {
      this._fetchData();
    } else {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=" +
            param +
            "&from=2021-12-12&sortBy=publishedAt&apiKey=cf961da6d12542ebb77dd016a8c28fc4"
        );
        const data = await response.json();
        this.setState({ data: data.articles });
      } catch (err) {
        console.log(err);
      }
    }
  }

  handleChange(event) {
    this.setState({ keyword: event.target.value });
  }

  render() {
    let { data } = this.state;
    //console.log(this.state.keyword);
    return (
      <div>
        <Container>
          <InputGroup className="mb-3">
            <FormControl
              name="search"
              placeholder="Search"
              onChange={this.handleChange}
            />
            <Button
              variant="outline-secondary"
              onClick={() => this._fetchSearch(this.state.keyword)}
            >
              Search
            </Button>
          </InputGroup>
        </Container>
        <Container>
          <Row>
            {data.map((artikel) => {
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
      </div>
    );
  }
}
export default LifecycleComp;
