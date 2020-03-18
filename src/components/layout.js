import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
import ReactMarkdown from "react-markdown";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Card } from "react-bootstrap";
import { NavLink, Route, Link } from "react-router-dom";
import SliderImage from "./SliderImage";




//strapi to call the blog posts
const strapi = new Strapi("http://localhost:1337");

const styles = {
  post: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 35,
    border: 3,
    color: "white",
    padding: " 20px 10px 0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  sidebar: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 25,
    border: 3,
    color: "white",
    padding: " 10px 10px 10px 10px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    height: "40vh"
  },
  sidebarInner: {
    background: "white",
    borderRadius: 25,

    color: "white",
    padding: " 50px 50px 50px 50px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  mainimage: {
    borderRadius: 35
  }
};

class Layout extends React.Component {
  render() {
   
    return (
      <div style={{ padding: "0 0 0 0", height: "100vh" }}>
        <SliderImage></SliderImage>
        <Container fluid>
          <Row>
            <Col lg></Col>
            <Col lg={5}>
              {this.props.posts.map(post => (
                <div style={{ padding: "20px 0 0 10px" }} key={post.id}>
                  <Card style={styles.post} fluid>
                
                      <Col style={{ verticalAlign: "middle" }}>
                        <h2>{post.title}</h2>
                        <p>{post.date_published}</p>
                        <NavLink
                          exact
                          to={{ pathname: "/posts/" + post.slug, post: post }}
                        style={{display:"flex", justifyContent:"flex-end", color:"white"}}
                        >
                          Read this post...
                        </NavLink>
                      </Col>
                   
                  </Card>
                </div>
              ))}
            </Col>
            <Col lg>
              <div style={{ padding: "30px 0 0 0" }}>
                <Container style={styles.sidebar}>
                  <Container style={styles.sidebarInner}></Container>
                </Container>
              </div>
            </Col>
            <Col lg></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Layout;
