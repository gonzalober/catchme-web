import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('1km');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  const white = {
    color: 'white',
  };

  return (
    <div>
      <FormControl className="form" component="fieldset">
        <FormLabel style={white} component="legend">Please select distance</FormLabel>
        <RadioGroup aria-label="distance" name="distance1" value={value} onChange={handleChange}>
          <FormControlLabel value="500m" control={<Radio />} label="500m" />
          <FormControlLabel value="1km" control={<Radio />} label="1km" />
          <FormControlLabel value="1.5km" control={<Radio />} label="1.5km" />
          <FormControlLabel value="2km" control={<Radio />} label="2km" />
          <FormControlLabel value="disabled" disabled control={<Radio />} label="(Custom -- Coming soon)" />
        </RadioGroup>
      </FormControl>
      <form className={classes.root} noValidate autoComplete="off" color="secondary" >
        <TextField id="outlined-secondary" label="Enter Name" variant="outlined" color="secondary" />
      </form>
      <Button variant="contained" color="primary">
        Create race
      </Button>

    </div>

  );
}
