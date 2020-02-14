import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  createMuiTheme
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

export class Header extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: "#FFFFFF",
          contrastText: "#FF3D00"
        },
        secondary: {
          main: "#FF3D00",
          contrastText: "#FF3D00"
        }
      }
    });
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className="testing">
              Welcome to Ben!
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Resources</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Ask Ben</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }
}

export default Header;
