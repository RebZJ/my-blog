import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
// import Strapi from "strapi-sdk-javascript/build/main";
// import { NavLink, Route, Link } from "react-router-dom";
// import ReactHtmlParser from 'react-html-parser';
// import { datemod } from "./datemod";
// import moment from "moment";
// import { Parallax, Background } from "react-parallax";
import SliderImage from "./SliderImage";

import RenderPosts from "./RenderPosts";



class Layout extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (
      
      <div style={{padding:"0 0 10px 0"}}>
  
  <SliderImage></SliderImage>

        <Container fluid>
          <Row>
            <Col lg></Col>
            <Col lg={5}>
        <RenderPosts posts={this.props.posts}></RenderPosts>
        </Col>
            <Col lg></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Layout;
