import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SearchForm from './SearchForm';
import CategoriesForm from './CategoriesForm';
import { Checkbox, FormControl, FormControlLabel, InputLabel, OutlinedInput } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '50%',
    minHeight: '300px',
    position: 'relative'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  search: {
    width: '100%'
  },
  categoriesForm: {
      width: '30%',
  },
  textFormat: {
    fontSize: '0.85rem'
  },
  bottomCheckbox: {
    position: 'absolute',
    bottom: '0',
  },
});

export default function FilterCardForm(props: any) {
const [currentCategories, setCategories] = useState<any[]>([]);
const [isBudgetSearch, setIsBudgetSearch] = useState<boolean>(true);
const [from, setFrom] = useState<number>(0);
const [to, setTo] = useState<number>(0);
const [isDescriptionSearch, setIsDescriptionSearch] = useState<boolean>(false);
const [searchValue, setSearchValue] = useState<string>();

useEffect(() => {
    const loadedCategories = props.categories;
    setCategories(loadedCategories);
  }, [props.categories]);

  const classes = useStyles();
  const buttonText = 'Cauta';
  const firstSectionText = 'Afiseaza doar categoriile selectate';
  const secondSectionText = 'Filtreaza dupa locatie';
  const thirdSectionText = 'Filtreaza rezultatele dupa buget';
  const descriptionSearchCheckbox = 'Cauta si in descriere';

  const onUpdateValues = (values: any[]) => {
    setCategories(values as any);
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <SearchForm onUpdateValue={(value: string) => setSearchValue(value)} buttonText={buttonText}/>
            

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
          <CategoriesForm categoriesText={firstSectionText} onlyChecked={false} values={currentCategories} onUpdateValues={(values: any[]) => onUpdateValues(values)}/>
          
          <div>
            <FormControlLabel className={classes.textFormat} control={ <Checkbox color="primary"  />}
              label={<p className={classes.textFormat}>{secondSectionText}</p>} />
          </div>
          
          <div>
            <FormControlLabel className={classes.textFormat}  control={ <Checkbox color="primary"  checked={!isBudgetSearch} onChange={() => setIsBudgetSearch(!isBudgetSearch)} />}
              label={<p className={classes.textFormat}>{thirdSectionText}</p>} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 5 }}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">De la</InputLabel>
                  <OutlinedInput disabled={isBudgetSearch} value={from} onChange={event => setFrom(Number(event.target.value))} id="component-outlined" type="number" label="de la" />
                </FormControl>
                <FormControl  variant="outlined">
                  <InputLabel htmlFor="component-outlined">Pana la</InputLabel>
                  <OutlinedInput disabled={isBudgetSearch} value={to} onChange={event => setTo(Number(event.target.value))} id="component-outlined" type="number" label="pana la" />
                </FormControl>
              </div>
              
              <FormControlLabel className={classes.bottomCheckbox}  control={ <Checkbox color="primary" checked={isDescriptionSearch} onChange={() => setIsDescriptionSearch(!isDescriptionSearch)} />}
              label={<p className={classes.textFormat}>{descriptionSearchCheckbox}</p>} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}