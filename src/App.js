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

// TODO: task 0: Create link for going back to main page
// TODO: task 1: Pass navigation param to screen, when navigating to Ship screen.
// TODO: task 2: Catch navigation param in Ship screen and store it in component state
// TODO: task 3: make request to https://swapi.dev/api to fetch data about certain space ship. You can use axios library or fetch API directly from JS.
// TODO: task 4: store response from backend in component state and display stored data in component
// TODO: task 5: Create redux store, for storing global state
// TODO: task 6: store response from API request in redux
// TODO: task 7: get data from store and display it instead data that is stored in component state, you can use hooks from react-redux library and reselect library
// TODO: task 8: do the same but use ContextAPI. you can use hook implementation.
// TODO: task 9: export component state to custom hook implementation.

// Additional:
// TODO: create not fount page

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
                    to="/ship"
                    onClick={handleClose}
                    className={classes.navItem}
                    activeClassName={classes.navItemActive}
                  >
                    Ship 2
                  </NavLink>
                  <NavLink
                    to="/ship"
                    onClick={handleClose}
                    className={classes.navItem}
                    activeClassName={classes.navItemActive}
                  >
                    Ship 3
                  </NavLink>
                  <NavLink
                    to="/ship"
                    onClick={handleClose}
                    className={classes.navItem}
                    activeClassName={classes.navItemActive}
                  >
                    Ship 5
                  </NavLink>
                  <NavLink
                    to="/ship"
                    onClick={handleClose}
                    className={classes.navItem}
                    activeClassName={classes.navItemActive}
                  >
                    Ship 9
                  </NavLink>
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
            <Route exact path={"/ship"} component={Ship} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
