import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  style: {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "100%",
    width: "100%",
  }
});

const Footer = (props) => {
  return (
    <div>
      <AppBar className={props.style}>
          <Typography variant="h6">
             Grupo 2 - Arquitectura de Software 1
          </Typography>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Footer);