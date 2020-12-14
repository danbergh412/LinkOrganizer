import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

function Filters() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(async () => {
    const result = await axios(
      'http://localhost:8090/categories',
    );
 
    setCategories(result.data);
    setSelectedCategory(result.data[0]._id);
  }, []);

  var formStyle = {
    form: {
      display: "flex"
    }
  };

  var menuItems = categories.map(c => {
    return (
      <MenuItem value={c._id}>{c.name}</MenuItem>
    );
  })

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
    console.log(selectedCategory);
  };

  return (
    <form style={formStyle}>
      <div>
        <InputLabel id="label">Category</InputLabel>
        <Select labelId="label" id="select" value={selectedCategory} onChange={handleChange}>
          { menuItems }
        </Select>
      </div>
      
    </form>
  );
}

export default Filters;