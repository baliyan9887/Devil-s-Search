import React from 'react';
import './search.style.css';

export const Search = ( {placeHolder, handleChange}) => (
    <div className="search-container">
       <input 
            type="search" 
            className="Search-box" 
            placeholder={placeHolder}
            onChange={handleChange}
        />
    </div>
)
