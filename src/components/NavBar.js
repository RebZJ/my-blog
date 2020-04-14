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
import { MyContext, MyProvider } from "../myContext";
import {Button} from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  shadows: ["none"],
  root: {
    flexGrow: 1,
    background: "rgba(0,0,0,0)",
    position: "sticky",
    top: 10,
    bottom: 10,
    overflow: "hidden",
    zIndex: 5,
  },
  menuButton: {},
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
    background: "black",
  },
  linksList: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    color: "black",
    "&:hover, &:focus": {},
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
    right: false,
  });

  const sideList = (side) => (
    <div
      style={{
        background: "linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)",
        width: "300px",
      }}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Container
        style={{
          padding: "10px 10px 10px 10px",
          color: "black",
          minHeight: "100vh",
        }}
      >
        <Col>
          <MyContext.Consumer>
            {(context) => (
              <Button variant="outline-dark" onClick={() => context.updateValue(true, "sidebar")}>
                Sign up to know when I find or write something cool!
              </Button>
            )}
          </MyContext.Consumer>
          
          <hr></hr>
          <Col style={{ padding: "10px 20px 10px 20px" }}>
            <NavLink
              exact
              to={{
                pathname: "/",
              }}
            >
              <Row className={classes.linksList}>
                <p>Home</p>
                <HomeIcon />
              </Row>
            </NavLink>

            <NavLink
              exact
              to={{
                pathname: "/posts",
              }}
            >
              <Row className={classes.linksList}>
                <p>Posts</p>
                <NoteIcon></NoteIcon>
              </Row>
            </NavLink>

            <NavLink
              exact
              to={{
                pathname: "/about",
              }}
            >
              <Row className={classes.linksList}>
                <p>About</p>
                <InfoIcon />
              </Row>
            </NavLink>
          </Col>
        </Col>
      </Container>
    </div>
  );

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div className={classes.root}>
      <AppBar
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,69,255,0.9444152661064426) 0%, rgba(0,181,255,0) 100%)",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.greeting}
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
