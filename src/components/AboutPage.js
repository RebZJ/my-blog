import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

var colorBack = "linear-gradient( to bottom, rgba(144,247,236,1) 10%, rgba(50,244,200,1) 100%)";

const styles = {
    post: {
        background: colorBack,
        borderRadius: 35,
        border: 3,
        textAlign: "center",
        color: "black",
        padding: " 40px 40px 40px 40px",
        boxShadow: "3px 3px 5px 2px rgba(0, 0, 0, 0.3)",
    },
}

class AboutPage extends Component {
    render() {
        var content = () => <div style={{ textAlign: "center", lineHeight: "40px" }}>
            <h3 style={{ textAlign: "center" }} >What's this all about?</h3><hr></hr>
            <div>Beats me dude. I have no clue. I just wanted to get into writing about stuff (and maybe hoped that something would come out of it).
            Just whatever I think of, whenever I feel like writing about it. Some of it may be rather profound, but most likely, probably not.
            You might find my writing to be rather distasteful and possibly quite absurd...if you point this out, I'd probably agree. So yea,
            feel free to look around and see if something catches your eye. I haven't decided if this is going to be about one topic or not either.
            Will I change this about page in the futue? Possibly. Anyway.....
       </div><div>Cheers</div><div>-Reb</div>
            <br></br>
            <h3 style={{ textAlign: "center" }} >How'd ya make this?</h3>
            <hr></hr>
            <p> Oh yes! You were wondering what this site is made with? ReactJS! I used uhh Bootstrap and Material-UI, and a whole lotta different libraries out there
            . It'll be up on me GitHub (well everything that doesn't involve authentication).
       </p>
       <br></br>
            <h3 style={{ textAlign: "center" }} >Contact?</h3>
            <hr></hr>
            <p> In the event you might want to contact me, my email is: rebmakesmusic@gmail.com. Feel free to ask me about anything or just....holla..ya know? 
       </p>
        </div>
            ;


        return (
            <div style={{ padding: "20px 20px 20px 20px" }}>



                <Container fluid>
                    <Row>
                        <Col lg></Col>
                        <Col lg={5} >
                            <h1 style={{ textAlign: "center" }} >About</h1>
                            <hr className="inherit"></hr>
                            <div style={styles.post}>{content()}</div>
                        </Col>
                        <Col lg></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default AboutPage;