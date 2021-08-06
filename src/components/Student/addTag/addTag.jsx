import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0),
        width: '30%',
        height: '1em',
      },
      marginTop:'1.5em',
    },
  }));
  
const AddTag = ({addTag, id}) => {
    const classes = useStyles();
   
    const onKeyPress = (event) => { 
     if(event.key === 'Enter'){
        event.preventDefault();
        let value = event.target.value;
        addTag(value, id);
        event.target.value= '';
    }}
    
    return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
      inputProps={{style: {fontSize: 20}}}
      InputLabelProps={{style: {fontSize: 20}}}  
      label="Add a tag"
      onKeyPress={onKeyPress} 
      />
    </form>
    );
};

export default AddTag;