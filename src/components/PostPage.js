//Where the post is rendered 

import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import { datemod } from "./datemod";
import { getcate } from "./getcate";
import sty from "./sty.module.css";
import { MyContext} from "../myContext";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,

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
      <div style={{ padding: "20px 10px 10px 10px", }}>
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
            <Container className={sty.simplefadein} style={styles.post}>
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

              <div dangerouslySetInnerHTML={{ __html: content }}></div>

              <hr></hr>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              ></div>
              <div
                style={{
                  // border: "5px dashed white",
                  padding: "2px 10px 2px 10px",
                }}
              >
                {" "}
                <p
                  style={{
                    textAlign: "center",
                    color: "black",
                    padding: "20px 0  0 0",
                  }}
                >
                  {
                    "Want to know the next time I find, write or make something kinda cool?"
                  }
                </p>
                <div
                  style={{

                    display: "flex",
                    justifyContent: "center",

                  }}>
                  <MyContext.Consumer>
                    {(context) => (
                      <Button

                        onClick={() => context.updateValue(true, "sidebar")}
                      >
                        Sign up {<TouchAppIcon style={{ padding: "2px 2px 2px 2px", position: "relative", bottom: "3px"  }} />}
                      </Button>
                    )}
                  </MyContext.Consumer>
                </div>
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
