import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

var colorBack =
  "linear-gradient( to bottom, rgba(144,247,236,1) 10%, rgba(50,244,200,1) 100%)";

const styles = {
  post: {
    background: colorBack,
    borderRadius: 35,
    border: 3,
    textAlign: "center",
    color: "black",
    padding: " 40px 40px 40px 40px",
    boxShadow: "3px 3px 5px 2px rgba(0, 0, 0, 0.3)",
  },
};
class NotFoundPage extends React.Component {
  render() {
    return (
      <div style={{ padding: "20px 20px 20px 20px" }}>
        <Container fluid>
          <Row>
            <Col lg></Col>
            <Col lg={5}>
              <h1 style={{ textAlign: "center" }}>Uh oh!</h1>
              <hr className="inherit"></hr>
              <div style={styles.post}>
                <p>
                  {
                    "Terribly sorry about this, but it appears that this link doesn't appear to exist."
                  }
                </p>
                <p style={{ textAlign: "center" }}>
                  <Link to="/">Go to home page?</Link>
                </p>
                <p>or if the issue persists</p>
                <p style={{ textAlign: "center" }}>
                  <Link to="/about">Contact me please!</Link>
                </p>
              </div>
              ;
            </Col>
            <Col lg></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default NotFoundPage;
