import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, InputAdornment, OutlinedInput } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl/FormControl';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    searchButton: {
      height: '55px',
      width: 'auto',
      margin: '0',
      padding: '10px',
      backgroundColor: '#3f8cb5',
      color: '#fff',
      borderBottomLeftRadius: '0px 0px',
      borderTopLeftRadius: '0px 0px',
      '&:hover': {
        backgroundColor: '#3f99b5'
      }
    },
    outlineInput: {
      margin: '0',
      padding: '0',
    },
  },
));

  
  export default function SearchForm(props: any) {
    const classes = useStyles();
    const [value, setValue] = useState<string>();
    return (
        <div>
            <FormControl className={classes.root} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-password"
                type='text'
                onChange={(event) => setValue(event.target.value)}
                className={classes.outlineInput}
                endAdornment={
                  <InputAdornment  position="end">
                    <Button className={classes.searchButton} onClick={() => props.onUpdateValue(value)}>{props.buttonText}</Button>
                  </InputAdornment>
                }
              />
          
        </FormControl>
        </div>
    );
  }