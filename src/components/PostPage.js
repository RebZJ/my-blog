import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import {
    Container,
    Col,
    Row,
    Image,
    Jumbotron,
    Button,
    Card
} from "react-bootstrap";
import {
    EmailShareButton,
    FacebookShareButton,
} from "react-share";

const styles = {
    post: {
        background: "white",
        borderRadius: 35,
        border: 3,
        color: "black",
        padding: " 30px 30px 30px 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    },
}



export default class PostPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Container style={styles.post}>
                    <h1>{this.props.post.title}</h1>
                    <h2>{this.props.post.date_published}</h2>
                    <div>{<ReactMarkdown source={this.props.post.content} />}</div>
                    

                </Container>
            </div>
        )
    }
}
