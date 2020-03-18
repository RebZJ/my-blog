import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {},
  title: {
    flexGrow: 1
  },
  list: {
    width: 250,
    background: "black"
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
    right: false
  });

  const sideList = side => (
    <div
      style={{backgroundColor:"black",width: 250, }}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >

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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Blog
          </Typography>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer('right', true)}
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
