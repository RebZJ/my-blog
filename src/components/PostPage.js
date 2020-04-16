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

var formembed = `<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
  #mc_embed_signup{background:transparent; clear:left; font:14px Helvetica,Arial,sans-serif;  width:auto;}
  /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
     We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://gmail.us19.list-manage.com/subscribe/post?u=b1c51f46229c1e2997b9ae1a7&amp;id=39f2b147fa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
  
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
  <label for="mce-FNAME">First Name  <span class="asterisk">*</span>
</label>
  <input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
</div>
<div class="mc-field-group">
  <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
  <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
  <div id="mce-responses" class="clear">
    <div class="response" id="mce-error-response" style="display:none"></div>
    <div class="response" id="mce-success-response" style="display:none"></div>
  </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"; ><input type="text" name="b_b1c51f46229c1e2997b9ae1a7_39f2b147fa" tabindex="-1" value=""></div>
    <div class="clear"><input style="  display: block;
    margin-left: auto;
    margin-right: auto;" type="submit" value="Sign up!" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->`;

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

              <div>{ReactHtmlParser(content)}</div>
              <hr></hr>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
              </div>
              <div
                style={{
                  border: "5px dashed white",
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
                    alignItems: "center",
                    flexDirection: "column",

                    color: "black",
                  }}
                  dangerouslySetInnerHTML={{ __html: formembed }}
                />
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
