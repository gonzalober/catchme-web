import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_RACE } from '../graphql/mutations/createRace';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function RaceForm() {
  const [value, setValue] = React.useState("500");
  const [createRace, { loading, error }] = useMutation(CREATE_RACE);

  function handleCreateRace(event) {
    event.preventDefault();
    // the mutate function also doesn't return a promise
    createRace({ variables: { distance: parseInt(value) } });
  }

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  const white = {
    color: 'white',
  };

  return (
    <form onSubmit={handleCreateRace}>
      <FormControl className="form" component="fieldset">
        <FormLabel style={white} component="legend">Please select distance</FormLabel>
        <RadioGroup aria-label="distance" name="distance1" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="500" control={<Radio />} label="500m" />
          <FormControlLabel value="1000" control={<Radio />} label="1km" />
          <FormControlLabel value="1500" control={<Radio />} label="1.5km" />
          <FormControlLabel value="2000" control={<Radio />} label="2km" />
          <FormControlLabel value="disabled" disabled control={<Radio />} label="(Custom -- Coming soon)" />
        </RadioGroup>
        <Button type="submit" variant="contained" color="primary">
          Create race
        </Button>
      </FormControl>
      
      {error && <p>{error.message}</p>}
    </form>
  );
}


