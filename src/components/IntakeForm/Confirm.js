import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import TopBar from "./TopBar.js";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    let data = JSON.stringify({
      firstName: this.props.values.firstName,
      lastName: this.props.values.lastName,
      email: this.props.values.email,
      sid: this.props.values.sid,
      academicTitle: this.props.values.academicTitle,
      residency: this.props.values.residency,
      major: this.props.values.major,
      majorWeight: this.props.values.majorWeight,
      gender: this.props.values.gender,
      genderWeight: this.props.values.genderWeight,
      hobbies: this.props.values.hobbies,
      availability: this.props.values.availability,
      hopeToGain: this.props.values.hopeToGain,
      planToMeet: this.props.values.planToMeet,
      occupation: this.props.values.occupation,
      city: this.props.values.city,
      bio: this.props.values.bio,
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
        majorWeight,
        gender,
        genderWeight,
        hobbies,
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
      },
      classes,
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <TopBar />
          <br />
          <h1 className={classes.formControl}>Confirmation</h1>
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="SID" secondary={sid} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Academic Title"
                secondary={academicTitle}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Residency" secondary={residency} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Major" secondary={major} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Major Preference Level"
                secondary={majorWeight}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Gender" secondary={gender} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Gender Preference Level"
                secondary={genderWeight}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Hobbies" secondary={hobbies.join(", ")} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Days of Week Availability"
                secondary={availability.join(", ")}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="What do you hope to gain from the SLC Language Exchange Program?"
                secondary={hopeToGain}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="How do you plan to maintain your motivation to meet with your partner(s) weekly?"
                secondary={planToMeet}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Choice Learn"
                secondary={firstChoiceLearn}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Choice Learn Other (If Applicable)"
                secondary={firstChoiceLearnOther}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Choice Learn Level"
                secondary={firstChoiceLearnLevel}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Second Choice Learn (If Applicable)"
                secondary={secondChoiceLearn}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Second Choice Learn Other (If Applicable)"
                secondary={secondChoiceLearnOther}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Second Choice Learn Level (If Applicable)"
                secondary={secondChoiceLearnLevel}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Choice Teach"
                secondary={firstChoiceTeach}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Choice Teach Other (If Applicable)"
                secondary={firstChoiceTeachOther}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Choice Learn Teach Level"
                secondary={firstChoiceTeachLevel}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Second Choice Teach (If Applicable)"
                secondary={secondChoiceTeach}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Second Choice Teach Other (If Applicable)"
                secondary={secondChoiceTeachOther}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Second Choice Teach Level (If Applicable)"
                secondary={secondChoiceTeachLevel}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Comments" secondary={comments} />
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
