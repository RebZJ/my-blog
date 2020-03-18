import React from "react";
import image_forest from "../assets/image_forest.webp";
import { Container } from "react-bootstrap";


class SliderImage extends React.Component {
  render() {
    return (
      <Container style={{ padding: "10px 10px 10px 10px" }} fluid>
        
        <Container
          style={{
            padding: "10px 10px 10px 10px",
            backgroundImage: `url(${image_forest})`,
            borderRadius: 25,
            height: "30vh"
          }}
          fluid
        ></Container>
      </Container>
    );
  }
}

export default SliderImage;
