import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import TopBar from "./TopBar.js";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 350,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#859438"),
    backgroundColor: "#859438",
    "&:hover": {
      backgroundColor: "#859438",
    },
    margin: theme.spacing(1),
  },
}))(Button);

class Confirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }
  handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };
  continue = (e) => {
    e.preventDefault();
    if (
      this.props.values.firstName.trim() === "" ||
      this.props.values.lastName.trim() === "" ||
      this.props.values.email.trim() === "" ||
      this.props.values.sid.trim() === "" ||
      this.props.values.academicTitle.trim() === "" ||
      this.props.values.residency.trim() === "" ||
      this.props.values.hopeToGain.trim() === "" ||
      this.props.values.planToMeet.trim() === "" ||
      this.props.values.firstChoiceLearn.trim() === "" ||
      this.props.values.firstChoiceLearnLevel.trim() === "" ||
      this.props.values.firstChoiceTeach.trim() === "" ||
      this.props.values.firstChoiceTeachLevel.trim() === "" ||
      this.props.values.waiverAccept.trim() === ""
    ) {
      this.setState({ open: true });
      return;
    }
    // PROCESS FORM! //
    let data = JSON.stringify({
      firstName: this.props.values.firstName,
      lastName: this.props.values.lastName,
      email: this.props.values.email,
      sid: this.props.values.sid,
      academicTitle: this.props.values.academicTitle,
      residency: this.props.values.residency,
      major: this.props.values.major,
      gender: this.props.values.gender,
      genderCustom: this.props.values.genderCustom,
      availability: this.props.values.availability,
      hopeToGain: this.props.values.hopeToGain,
      planToMeet: this.props.values.planToMeet,
      firstChoiceLearn: this.props.values.firstChoiceLearn,
      firstChoiceLearnOther: this.props.values.firstChoiceLearnOther,
      firstChoiceLearnLevel: this.props.values.firstChoiceLearnLevel,
      secondChoiceLearn: this.props.values.secondChoiceLearn,
      secondChoiceLearnOther: this.props.values.secondChoiceLearnOther,
      secondChoiceLearnLevel: this.props.values.secondChoiceLearnLevel,
      firstChoiceTeach: this.props.values.firstChoiceTeach,
      firstChoiceTeachOther: this.props.values.firstChoiceTeachOther,
      firstChoiceTeachLevel: this.props.values.firstChoiceTeachLevel,
      secondChoiceTeach: this.props.values.secondChoiceTeach,
      secondChoiceTeachOther: this.props.values.secondChoiceTeachOther,
      secondChoiceTeachLevel: this.props.values.secondChoiceTeachLevel,
      comments: this.props.values.comments,
      preferredMajor: this.props.values.preferredMajor,
      preferredMajorWeight: this.props.values.preferredMajorWeight,
      preferredGender: this.props.values.preferredGender,
      preferredGenderCustom: this.props.values.preferredGenderCustom,
      preferredGenderWeight: this.props.values.preferredGenderWeight,
      waiverAccept: this.props.values.waiverAccept,
    });
    console.log(data);
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        firstName,
        lastName,
        email,
        sid,
        academicTitle,
        residency,
        major,
        gender,
        genderCustom,
        availability,
        hopeToGain,
        planToMeet,
        firstChoiceLearn,
        firstChoiceLearnOther,
        firstChoiceLearnLevel,
        secondChoiceLearn,
        secondChoiceLearnOther,
        secondChoiceLearnLevel,
        firstChoiceTeach,
        firstChoiceTeachOther,
        firstChoiceTeachLevel,
        secondChoiceTeach,
        secondChoiceTeachOther,
        secondChoiceTeachLevel,
        comments,
        preferredMajor,
        preferredMajorWeight,
        preferredGender,
        preferredGenderCustom,
        preferredGenderWeight,
        waiverAccept,
      },
      classes,
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Snackbar
            open={this.state.open}
            autoHideDuration={5000}
            onClose={() => this.setState({ open: false })}
          >
            <Alert onClose={this.handleClose} severity="error">
              Please make sure you have filled out all the required fields
              marked by an asterick
            </Alert>
          </Snackbar>
          <TopBar />
          <br />
          <h1 className={classes.formControl}>Confirmation</h1>
          <List>
            <ListItem>
              <ListItemText primary="First Name:*" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name:*" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email:*" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="SID:*" secondary={sid} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Academic Title:*"
                secondary={academicTitle}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Residency:*" secondary={residency} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Major(s):" secondary={major} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Gender:" secondary={gender} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Gender Custom Response (If Applicable):"
                secondary={genderCustom}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Days of Week Availability:"
                secondary={availability.join(", ")}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="What do you hope to gain from the SLC Language Exchange Program:*"
                secondary={hopeToGain}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="How do you plan to maintain your motivation to meet with your partner(s) weekly:*"
                secondary={planToMeet}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Choice Learn:*"
                secondary={firstChoiceLearn}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Choice Learn Other:"
                secondary={firstChoiceLearnOther}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Choice Learn Level:*"
                secondary={firstChoiceLearnLevel}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Second Choice Learn:"
                secondary={secondChoiceLearn}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Second Choice Learn Other:"
                secondary={secondChoiceLearnOther}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Second Choice Learn Level:"
                secondary={secondChoiceLearnLevel}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Choice Teach:*"
                secondary={firstChoiceTeach}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Choice Teach Other:"
                secondary={firstChoiceTeachOther}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Choice Learn Teach Level:*"
                secondary={firstChoiceTeachLevel}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Second Choice Teach:"
                secondary={secondChoiceTeach}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Second Choice Teach Other:"
                secondary={secondChoiceTeachOther}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Second Choice Teach Level:"
                secondary={secondChoiceTeachLevel}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Comments:" secondary={comments} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Preferred Major(s):"
                secondary={preferredMajor}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Preferred Major(s) Preference Level:"
                secondary={preferredMajorWeight}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Preferred Gender:"
                secondary={preferredGender}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Preferred Gender Custom Response (If Applicable):"
                secondary={preferredGenderCustom}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Preferred Gender Preference Level:"
                secondary={preferredGenderWeight}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Waiver Acknowledgment:*"
                secondary={waiverAccept}
              />
            </ListItem>
          </List>
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={this.back}
          >
            Back
          </ColorButton>
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={this.continue}
          >
            Confirm & Continue
          </ColorButton>
        </>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(useStyles)(Confirm);
