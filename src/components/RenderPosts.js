import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Card } from "react-bootstrap";
import { NavLink, Route, Link, withRouter } from "react-router-dom";
import { getcate } from "./getcate";
import { datemod } from "./datemod";
import moment from "moment";
import truncate from "truncate-html";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import sty from './sty.module.css'

var colorBack = "linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)"
const styles = {
  post: {
    background: colorBack,
    borderRadius: 35,
    border: 3,
    color: "black",
    padding: " 20px 10px 0 30px",
    boxShadow: "3px 3px 5px 2px rgba(0, 0, 0, 0.3)",
    cursor: "pointer" 
  },


  sidebar: {
    background: colorBack,
    borderRadius: 25,
    border: 3,
    color: "white",
    padding: " 10px 10px 10px 10px",
    boxShadow: "3px 3px 5px 2px rgba(0, 0, 0, 0.3)",
    height: "40vh"
  },
  sidebarInner: {
    background: "white",
    borderRadius: 25,

    color: "white",
    padding: " 50px 50px 50px 50px",
    boxShadow: "3px 3px 5px 2px rgba(255, 105, 135, .3)"
  }
};

class RenderPosts extends React.Component {
  constructor(props) {
    super(props);

    this.goHome = this.goHome.bind(this);
  }

  goHome = pushpath => {
    this.props.history.push(pushpath);
  };

  render() {
    function transform(node) {
      // do not render any <span> tags

      if (node.type === "tag" && node.name === "img") {
        return null;
      } else if (node.type === "text" && node.name === "p") {
        return node.data;
      } else if (node.type === "tag" && node.name === "h2") {
        return null;
      } else if (node.type === "tag" && node.name === "h1") {
        return null;
      } else if (node.type === "tag" && node.name === "h3") {
        return null;
      }
    }

    function ProcessContent(content, options) {
      var addition = "<style>p {text-align: left!important;}</style>";
      var modcontent = content + addition;
      var final = truncate(modcontent, 25, { byWords: true });
      return ReactHtmlParser(final, options);
    }

    const options = {
      decodeEntities: true,
      transform
    };

    return (

      <div className={sty.rollIn}>
        {this.props.posts.map(post => (
          <div style={{ padding: "20px 0 10px 10px" }} key={post.slug} >
            <Card
              style={styles.post}
              className={sty.btn}
              fluid="true"
              onClick={() =>
                this.props.history.push(
                  "/posts/" +
                    moment(post.date).format("YYYY-MM-DD") +
                    "/" +
                    post.slug
                )
              }
            >
              <Col>
                <h2>{ReactHtmlParser(post.title)}</h2>
        
                <hr></hr>
                <Row
                  style={{
                  
                    display: "flex",
                    justifyContent: "inherit",

                    padding: "0 10px 0 10px"
                  }}
                >
                  <div>{datemod(post.date)}</div>
                  <p>&nbsp;&nbsp;</p>
                  <div>{getcate(post.terms.category)}</div>
                </Row>
                <div>{ProcessContent(post.content, options)}</div>
                <Link
                  
                  to={{
                    pathname:
                      "/posts/" +
                      moment(post.date).format("YYYY-MM-DD") +
                      "/" +
                      post.slug,
                    post: post
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                
                    padding: "0 0 10px 0"
                  }}
                >
                  Read this post...
                </Link>
              </Col>
            </Card>
          </div>
        ))}
      </div>
  
    );
  }
}
export default withRouter(RenderPosts);
