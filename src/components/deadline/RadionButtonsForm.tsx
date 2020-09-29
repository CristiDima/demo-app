import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { DeadlineOptions } from '../../models/DeadlineOptions';
import classNames from 'classnames';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    selected: {
        backgroundColor: '#3f8cb5',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#3f99b5',
          border: '1px solid #2b387c'
        }
    },
    
  radioButton: {
      minWidth: '100px',
    }
  }),
);

export default function RadioButtonsForm(props: any) {
  const classes = useStyles();
  const updateSelected = (option: any) => {
    props.onUpdateSelectedOpt(option);
  }

  const isSelected = (option: any): boolean => {
    if (option === props.selectedOption) {
      return true;
    }

    return false
  }

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {props.options.map((option: DeadlineOptions) => (
            <Button className={isSelected(option) ? classNames(classes.selected, classes.radioButton) : classes.radioButton} key={option.id} 
            onClick={() => updateSelected(option)}>
              {option.value}</Button>
        ))}
        
      </ButtonGroup>
    </div>
  );
}
