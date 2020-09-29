import React, { useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel, FormGroup, List, makeStyles, Paper } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles({
  paper: {
    height: '200px',
    paddingLeft: '0.5rem',
    overflowY: 'auto'
  },
  textFormat: {
    fontSize: '0.85rem'
  }
});

export default function CategoriesForm(props: any) {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(props.isChecked ?  props.isChecked : false);
  const values = props.values ? props.values : [];
  const [filteredValues, setFilteredValues] = useState([]);

  useEffect(() => {
      filterValues();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked, values]);

  const filterValues = () => {
    if (isChecked) {
      const filteredVals: any[] = values.filter((el: { isSelected: boolean; }) => el.isSelected);
      setFilteredValues(filteredVals as any);
      return;
    }
    setFilteredValues(values);
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
  }

  const updateValues = (value: any) => {
    value.isSelected = !value.isSelected;
    props.onUpdateValues([...values]);
  }

  return (
    <div>
       <FormControlLabel className={classes.textFormat}
            control={ <Checkbox checked={isChecked} onChange={handleChange}  color="primary"  />}
            label={<p className={classes.textFormat}>{props.categoriesText}</p>} />
      <Paper className={classes.paper}>
        <List>
        <FormGroup> 
        {filteredValues.map((value: any) => (
            <FormControlLabel key={value.id} control={ <Checkbox onChange={() => updateValues(value)} checked={value.isSelected} color="primary"   />}
            label={<p className={classes.textFormat}>{value.name}</p>} />
        ))}
      </FormGroup>
        </List>
      </Paper>
    </div>
  );
}