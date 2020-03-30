import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { Container, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import NoteIcon from "@material-ui/icons/Note";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
  shadows: ["none"],
  root: {
    flexGrow: 1,
    background: "rgba(0,0,0,0)",
    position: "sticky",
    top: 10,
    bottom: 10,

    zIndex: 5
  },
  menuButton: {},
  title: {
    flexGrow: 1
  },
  list: {
    width: 250,
    background: "black"
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
    right: false
  });

  const sideList = side => (
    <div
      style={{
        background: "linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)",
        width: "300px",
        minHeight: "100vh"
      }}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Container style={{ padding: "10px 10px 10px 10px", color: "black" ,}}>
        <Col>
          <h2>Welcome!</h2>
          <hr></hr>
          <Col style={{ padding: "10px 20px 10px 20px" }}>
            <NavLink
              exact
              to={{
                pathname: "/"
              }}
            >
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row"
                }}
              >
                <p>Home</p>
                <HomeIcon />
              </Row>
            </NavLink>

            <NavLink
              exact
              to={{
                pathname: "/posts"
              }}
            >
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row"
                }}
              >
                <p>Posts</p>
                <NoteIcon></NoteIcon>
              </Row>
            </NavLink>

            <NavLink
              exact
              to={{
                pathname: "/about"
              }}
            >
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row"
                }}
              >
                <p>About</p>
                <InfoIcon />
              </Row>
            </NavLink>
          </Col>
        </Col>
      </Container>
    </div>
  );

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  function message() {
    var messages = [
      "Good to see ya!",
      "Welcome friend!",
      "Howdy!",
      "Top o' the mornin",
      "Hello!",
      "Hey there, good lookin'",
      "Hey!"
    ]
    var num = Math.floor(Math.random() * messages.length);
    return messages[num];
  }
  return (
    <div className={classes.root}>
      <AppBar
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,69,255,0.9444152661064426) 0%, rgba(0,181,255,0) 100%)",
          boxShadow: "none"
        }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {message()}
          </Typography>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("right", true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={state.right}
            onClose={toggleDrawer("right", false)}
          >
            {sideList("right")}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
