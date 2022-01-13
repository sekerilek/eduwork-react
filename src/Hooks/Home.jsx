import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Navbar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Articles from "./Articles";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [paramSearch, setParamSearch] = useState("top-headlines?country=us");
  const [paramFromButton, setParamButton] = useState(
    "top-headlines?country=us"
  );

  useEffect(() => {
    // fetch(
    //   `https://newsapi.org/v2/${paramFromButton}&apiKey=17ca9f86cf474fdf896cd28c8f6b269c`
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     console.log(res.articles);
    //     setArticles(res.articles);
    //   });
    axios
      .get(
        `https://newsapi.org/v2/${paramFromButton}&apiKey=17ca9f86cf474fdf896cd28c8f6b269c`
      )
      .then((res) => {
        console.log(res.data.articles);
        setArticles(res.data.articles);
      });
  }, [paramFromButton]);

  const handleSearch = () => {
    setParamButton(paramSearch);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="home">News App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>

      <Container>
        <InputGroup className="mb-3">
          <FormControl
            name="search"
            placeholder="Search"
            onChange={(e) => setParamSearch("everything?q=" + e.target.value)}
          />
          <Button variant="outline-secondary" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
      </Container>

      <Articles articles={articles} />
    </div>
  );
};

export default Home;
