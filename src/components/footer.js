import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import Modal from "react-modal";

const styles = {
  root: {
    background:
      "linear-gradient(to top, rgba(0,69,255,0.9444152661064426) 0%, rgba(0,181,255,0.8) 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    background:"linear-gradient( to bottom, rgba(144,247,236,1) 10%, rgba(50,244,200,1) 100%)",
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "15px"
  }
};

var messages = [
  "Want to know when I put something else out?",
  "How do I make a million dollars?",
  "What's the key to happiness?",
  "How can I live my best life?",
  "What is the secret to learning everything?"
];
function message() {
  var num = Math.floor(Math.random() * 3);
  var formresponse;
  if (num != 0) {
    formresponse =
      "Well what are you waiting for? I'm asking you. (I have no idea if you were wondering)";
  } else {
    formresponse = "";
  }
  return {
    data: messages[num] + " (click here)",
    number: num,
    formresponse: formresponse
  };
}

export default function Footer(props) {
  var randomMessage = message();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  var formembed = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfgeOE-Azc1fuoSXbE7gPuSeW_HmndEibldgxF9Q_twbAuuqA/viewform?embedded=true" 
  width="640" height="750" frameborder="0" marginheight="10" marginwidth="10">Loading…</iframe>`;

  return (
    <Container style={styles.root} fluid>
      <Col></Col>
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={styles}>
          <form>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <div>{randomMessage.formresponse}</div>
              {ReactHtmlParser(formembed)}
            </div>
          </form>
          <Button onClick={closeModal}>Close</Button>
        </Modal>
        <div style={{ padding: "10px 10px 10px 10px" }}>
          <Button onClick={openModal}>{randomMessage.data}</Button>
        </div>
        <p style={{ textAlign: "center", color:"white", padding:"50px 0  0 0" }}>
          {
            "Copyright(c) all rig...blah blah blah, it's all on my Github, feel free to use it however you want"
          }
        </p>
      </Col>
      <Col>
      
      </Col>
    </Container>
  );
}
