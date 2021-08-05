import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange} 
    />

    // setState is asyncronous, the second callback function makes sure that it will only print after setState is completed, therefore, there will be no delay
    // 每次setState 被 call，都会重新触发render()
    // this.setState({searchField: e.target.value}, () => console.log(this.state)); // setState is asyncronous, the second callback function makes sure that it will only print after setState is completed, therefore, there will be no delay  
);

