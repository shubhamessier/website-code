import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const [data, setData] = useState(null); // Define setData here

  useEffect(() => {
    fetch("https://mocki.io/v1/90c36e28-d684-46a9-8bfe-575f69af0061")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useStyles = makeStyles((theme) => ({
  form: {
    maxWidth: 600,
    margin: "auto",
    padding: theme.spacing(3),
    boxShadow: theme.shadows,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.background.paper,
  },
  formInput: {
    borderRadius: theme.shape.borderRadius,
    "& .MuiOutlinedInput-input": {
      padding: theme.spacing(1.5),
    },
  },
  formLabel: {
    color: theme.palette.text.secondary,
  },
  formTitle: {
    marginBottom: theme.spacing(3),
    fontWeight: 600,
  },
  uploadButton: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  submitButton: {
    borderRadius: theme.shape.borderRadius * 2,
    height: 48,
    fontSize: 16,
    fontWeight: 600,
  },
  gridItem: {
    padding: theme.spacing(1),
  },
}));

const JobApplicationForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_no: "",
    role: "",
    resume_link: null,
    current_location: "",
  });

  const [availablePositions, setAvailablePositions] = useState([
    "Software Engineer",
    "Product Manager",
    "UI/UX Designer",
    "Data Analyst",
    "Marketing Specialist",
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // Submit form data to server or perform desired action
    console.log(formData);
  };

  return (
    <Paper elevation={3} className={classes.form}>
      <Typography variant="h4" className={classes.formTitle} color="black">
        Open Position
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            className={classes.formInput}
            InputProps={{
              classes: {
                input: classes.formInput,
              },
            }}
            InputLabelProps={{
              className: classes.formLabel,
            }}
          />
        </Grid>

        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            className={classes.formInput}
            InputProps={{
              classes: {
                input: classes.formInput,
              },
            }}
            InputLabelProps={{
              className: classes.formLabel,
            }}
          />
        </Grid>

        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.contact_no}
            onChange={handleChange}
            required
            fullWidth
            className={classes.formInput}
            InputProps={{
              classes: {
                input: classes.formInput,
              },
            }}
            InputLabelProps={{
              className: classes.formLabel,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} className={classes.gridItem}>
          <FormControl fullWidth className={classes.formInput}>
            <InputLabel id="job-position-label" className={classes.formLabel}>
              Job Position
            </InputLabel>
            <Select
              labelId="job-position-label"
              id="jobPosition"
              name="jobPosition"
              value={formData.role}
              onChange={handleChange}
              required
              className={classes.formInput}
            >
              <MenuItem value="">Select a position</MenuItem>
              {availablePositions.map((position) => (
                <MenuItem key={position} value={position}>
                  {position}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.gridItem}>
          <FormControl fullWidth className={classes.formInput}>
            <InputLabel id="location-label" className={classes.formLabel}>
              Location
            </InputLabel>
            <Select
              labelId="location-label"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className={classes.formInput}
            ></Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            label="Years of Experience"
            name="yearsOfExperience"
            type="number"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            fullWidth
            className={classes.formInput}
            InputProps={{
              classes: {
                input: classes.formInput,
              },
            }}
            InputLabelProps={{
              className: classes.formLabel,
            }}
          />
        </Grid>

        <Grid item xs={12} className={classes.gridItem}>
          <TextField
            label="Skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            className={classes.formInput}
            InputProps={{
              classes: {
                input: classes.formInput,
              },
            }}
            InputLabelProps={{
              className: classes.formLabel,
            }}
          />
        </Grid>

        <Grid item xs={12} className={classes.gridItem}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submitButton}
            onClick={handleSubmit}
          >
            Submit Application
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JobApplicationForm;
