import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import { datemod } from "./datemod";
import { getcate } from "./getcate";
import sty from "./sty.module.css";
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TumblrIcon,
  TwitterIcon,
} from "react-share";

const styles = {
  post: {
    background: "rgba(144,247,236,1)",
    borderRadius: 10,
    border: 3,
    color: "black",
    padding: " 30px 50px 30px 50px",
    boxShadow: "3px 3px 5px 2px rgba(0,0,0,0.3)",
  },
};

export default class PostPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var styleof =
      "<style>img{width:auto;\
            height:auto;\
            max-width:80%;\
            display:block;\
            margin-left: auto;\
            margin-right: auto;\
            }</style>";
    var content = this.props.post.content + styleof;
    var shareUrl = window.location.href;
    var direction = "row";
    return (
      <div style={{ padding: "20px 10px 10px 10px" }}>
        <Row noGutters="true" fluid>
          <Col lg>
            <Container
              className={sty.rollIn}
              style={{
                padding: "20px",

                position: "sticky",
              }}
            >
              <Col></Col>
            </Container>
          </Col>
          <Col lg={5}>
            <Container></Container>
            <Container style={styles.post}>
              <h1 style={{ textAlign: "center" }}>
                {ReactHtmlParser(this.props.post.title)}
              </h1>

              <Row
                style={{
                  color: "grey",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div>{datemod(this.props.post.date)}</div>
                <p>&nbsp;&nbsp;</p>
                <div>{getcate(this.props.post.terms.category)}</div>
              </Row>

              <hr></hr>

              <div>{ReactHtmlParser(content)}</div>
              <hr></hr>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
                <p>With love,</p>
                <p>Reb</p>
              </div>
            </Container>

            <Col className={sty.rollIn}>
              <Container
                style={{
                  display: "flex",
                  justifyContent: "center",

                  flexDirection: direction,
                  padding: "10px 10px 10px 10px",
                }}
              >
                <EmailShareButton className={sty.roll} url={shareUrl}>
                  <EmailIcon></EmailIcon>
                </EmailShareButton>
                <FacebookShareButton url={shareUrl} className={sty.roll}>
                  <FacebookIcon></FacebookIcon>
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} className={sty.roll}>
                  <TwitterIcon></TwitterIcon>
                </TwitterShareButton>
                <RedditShareButton url={shareUrl} className={sty.roll}>
                  <RedditIcon></RedditIcon>
                </RedditShareButton>
                <TumblrShareButton url={shareUrl} className={sty.roll}>
                  <TumblrIcon></TumblrIcon>
                </TumblrShareButton>
              </Container>
              <p
                className={sty.boing}
                style={{
                  display: "flex",
                  justifyContent: "center",

                  flexDirection: direction,
                  padding: "10px 10px 10px 10px",
                }}
              >
                "AHHH! They've seen us! Bounce away!!"
              </p>
            </Col>
          </Col>

          <Col lg></Col>
        </Row>
      </div>
    );
  }
}
