import React, { Component } from 'react';
import RenderPosts from './RenderPosts';
import {Container, Row, Col} from 'react-bootstrap';
//liSt of posts
class AllBlogPostsPage extends Component {
    render() {
        return (
            <div>


           
            <Container fluid>
              <Row>
                <Col lg></Col>
                <Col lg={5}>
                <h1 style={{textAlign:"center", padding:"20px 0 0 0 "}}>All Posts</h1>
            <hr className="inherit"></hr>
            <RenderPosts posts={this.props.posts}></RenderPosts>
            </Col>
                <Col lg></Col>
              </Row>
            </Container>
          </div>
        );
    }
}


export default AllBlogPostsPage;