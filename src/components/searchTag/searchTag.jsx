import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(5),
        width: '90%',
        height: '1em',
      },
    },
  }));

const SearchByTag = ({searchByTag}) => {
  const classes = useStyles();
  const handleChange = (event) => { 
    let value = event.target.value; 
    searchByTag(value);
  }

    return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
      inputProps={{style: {fontSize: 40}}}
      InputLabelProps={{style: {fontSize: 40}}}  
      label="Search by tag" 
      onChange={handleChange} />
    </form>
    );
};

export default SearchByTag;