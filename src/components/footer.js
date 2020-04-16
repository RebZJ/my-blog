import React, { useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import Modal from "react-responsive-modal";
import { MyContext, MyProvider } from "../myContext";
import sty from "./sty.module.css";

const styles = {
  root: {
    overflow: "hidden",
    background:
      "linear-gradient(to top, rgba(0,69,255,0.9444152661064426) 0%, rgba(0,181,255,0.8) 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    background:
      "linear-gradient( to bottom, rgba(144,247,236,1) 10%, rgba(50,244,200,1) 100%)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "15px",
  },
  modal: {
    borderRadius: "20px",
  },
  overlay: {
    background:
      "linear-gradient(to top, rgba(0,69,255,0.4444152661064426) 0%, rgba(0,181,255,0.4) 100%)",
  },
};

var messages = [
  "Want to know when I put something else out?",
  "How do I make a million dollars?",
  "What's the key to happiness?",
  "How can I live my best life?",
  "What is the secret to learning everything?",
  "Can I be hyper productive in 5 mins?",
  "How do I win everything everytime?",
  "What is the meaning of life, the universe and everything else?",
];

function message() {
  var num = Math.floor(Math.random() * 3);
  var formresponse;
  if (num != 0) {
    formresponse = (
      <div>
        <p>
          {
            "WELL...what are you waiting for!? I'm asking you! I wouldn't have a clue."
          }

          <br></br>
          <span className={sty.hidden}></span>
        </p>

        <br />
        <p>
          {
            "BUT...if I get closer to the answer I'll let you know. Leave me your details!"
          }
        </p>
      </div>
    );
  } else {
    formresponse = "";
  }
  return {
    data: messages[num] + " (click here)",
    number: num,
    formresponse: formresponse,
  };
}
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

function SignUpModal(props) {
  var randomMessage = message();
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  const [baitmessage, setbaitmessage] = React.useState(message());

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <MyContext.Consumer>
      {(context) => (
        <div>
          <Modal
            open={context.state.modal.value}
            onClose={() => context.updateValue(false)}
            styles={styles}
            center={"true"}
            blockScroll={false}
          >
            <form style={{ padding: "20px" }}>
              <div style={{ maxWidth: "400px", textAlign: "center" }}>
                <p>
                  {context.state.modal.source == "footer"
                    ? baitmessage.formresponse
                    : props.message}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "20px",
                }}
                dangerouslySetInnerHTML={{ __html: formembed }}
              />
              <div style={{ maxWidth: "400px", textAlign: "center" }}>
                <p style={{ fontSize: "70%" }}>
                  {"(This isn't really a mailing list, I just share thoughts or cool stuff I find. " +
                    "Just something both of us can learn from. I always appreciate conversation so feel free to reply to anything I find or make)"}
                </p>
              </div>
            </form>
            {/* <Button onClick={closeModal}>Close</Button> */}
          </Modal>
          <div style={{ padding: "10px 10px 10px 10px" }}>
            <Button onClick={() => context.updateValue(true, "footer")}>
              {baitmessage.data}
            </Button>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default function Footer(props) {
  return (
    <Container style={styles.root} fluid>
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <SignUpModal></SignUpModal>
      {/* <div style={{border:"5px dashed white", padding:"2px 10px 2px 10px"}}></div> */}
        <div
          style={{
            textAlign: "center",
            color: "white",
            padding: "10px 10px  10px 10px",
   
          }}
        >
        
            <span>Copyright(c) all rig...blah blah blah, it's all on my</span> <a href ={"https://github.com/RebZJ"}> Github,</a><span> feel free to use it however you want"</span>
         
        </div>
      </Col>
    </Container>
  );
}
