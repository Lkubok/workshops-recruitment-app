import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import { Container } from "@material-ui/core";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { NavLink } from "react-router-dom";

import Main from "./Main";
import Ship from "./Ship";

// TODO: task 1:
// TODO: task 2:
// TODO: task 3:
// TODO: task 4:

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  skeleton: {
    borderWidth: 1,
    width: 300,
    borderColor: "red",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  menu: {
    display: "flex",
    flexDirection: "column",
  },
  navItem: {
    color: "gray",
    textDecoration: "none",
    flexGrow: 1,
    padding: "10px",
    transition: "color 0.4s ease-in-out",
  },
  navItemActive: {
    color: "black",
    textDecoration: "none",
    flexGrow: 1,
    padding: "10px",
    transition: "color 0.4s ease-in-out",
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router history={history}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon onClick={handleClick} />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <div className={classes.menu}>
                  <NavLink
                    to="/ship/2"
                    onClick={handleClose}
                    className={classes.navItem}
                    activeClassName={classes.navItemActive}
                  >
                    Ship 2
                  </NavLink>
                  <NavLink
                    to="/ship/3"
                    onClick={handleClose}
                    className={classes.navItem}
                    activeClassName={classes.navItemActive}
                  >
                    Ship 3
                  </NavLink>
                  <NavLink
                    to="/ship/5"
                    onClick={handleClose}
                    className={classes.navItem}
                    activeClassName={classes.navItemActive}
                  >
                    Ship 5
                  </NavLink>
                  <NavLink
                    to="/ship/9"
                    onClick={handleClose}
                    className={classes.navItem}
                    activeClassName={classes.navItemActive}
                  >
                    Ship 9
                  </NavLink>
                  {/* TODO: create link for going back to main page */}
                </div>
              </Menu>
            </IconButton>
            <Typography variant="h6" color="inherit">
              Star wars ships
            </Typography>
          </Toolbar>
        </AppBar>
        <Container className={classes.container}>
          <Switch>
            <Route exact path={"/"} component={Main} />
            <Route exact path={"/ship/:shipID"} component={Ship} />
            {/* TODO: add not found page */}
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
