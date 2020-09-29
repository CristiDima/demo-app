import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Deadline from './components/deadline/Deadline';
import FilterCardForm from './components/search/FilterCardForm';
import { Categories } from './models/Categories';

const useStyles = makeStyles({
  root: {
    display: 'flex', 
    justifyContent: 'center'
  },

});

function App() {
  const getCategories = (): Categories[] => {
    const loadedCategories = [];
    let loadedCategory: Categories = new Categories();
    loadedCategory.id = 1;
    loadedCategory.name = 'Imobiliare';
    loadedCategories.push(loadedCategory);
    loadedCategory = new Categories();
    loadedCategory.id = 2;
    loadedCategory.name = 'Constructii';
    loadedCategories.push(loadedCategory);
    loadedCategory = new Categories();
    loadedCategory.id = 3;
    loadedCategory.name = 'Arhitectura si proiectare';
    loadedCategories.push(loadedCategory);
    loadedCategory = new Categories();
    loadedCategory.id = 4;
    loadedCategory.name = 'Tamplarie Usi si Ferestre';
    loadedCategories.push(loadedCategory);
    loadedCategory = new Categories();
    loadedCategory.id = 5;
    loadedCategory.name = 'Casa si Bricolaj';
    loadedCategories.push(loadedCategory);

    return loadedCategories;
}

  const classes = useStyles();

  return (
    <div className="App">
      <Deadline/>
      <div  className={classes.root}>
        <FilterCardForm categories={getCategories}/>
      </div>
    </div>
  );
}

export default App;
