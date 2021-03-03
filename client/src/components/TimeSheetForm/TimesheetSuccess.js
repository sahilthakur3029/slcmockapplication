import React, { Component } from "react";
import TopBar from "../IntakeForm/TopBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 350,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class TimesheetSuccess extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <TopBar />
          <br />
          <h1 className={classes.formControl}>
            Thank You For Logging In Your Hours!
          </h1>
          <p className={classes.formControl}>You can now close this page.</p>
        </>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(useStyles)(TimesheetSuccess);
