import React from 'react';

const Search = (props) => {
    return (
        <div>
            <label>Filter for Specific Sushi:</label>
            <input
            type='text' name='search' placeholder='Enter Name Here' onChange={ props.sushiSearch } 
            />
        </div>
    )
}

export default Search