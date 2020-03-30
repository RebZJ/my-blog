import React from "react";
import image_forest from "../assets/image_forest.webp";
import { Container, Col } from "react-bootstrap";
import doggo from "../assets/doggo.gif";
import sty from "./sty.module.css";

class SliderImage extends React.Component {
  render() {
    return (
      <Container
        style={{
          padding: "0 0 0 0",
          overflow: "hidden",
          borderRadius: 0,
          height: "40vh",
        
          marginTop:-60
        }}
        fluid
      >
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,86,255,0.9444152661064426) 0%, rgba(0,255,248,0) 100%)",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <div>
            <h1 style={{ color: "white" }} className={sty.typewriter}>
              Hello!
            </h1>
          </div>

          <img src={doggo} height="90px" className={sty.doggo} href="#" onClick={() =>console.log(`If you see this. You attempted to pat 1 (of many) good boys. 
          Dog wishes you the best of luck in your endevaours. If you see this you're likely a dev sooo uhh happy coding (or not). *tink*`)}></img>
        </div>
      </Container>
    );
  }
}

export default SliderImage;
