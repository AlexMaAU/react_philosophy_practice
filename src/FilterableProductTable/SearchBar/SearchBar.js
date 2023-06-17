import SearchBarInput from './SearchBarInput'
import SearchBarOption from './SearchBarOption'
import './SearchBar.css'
import React from 'react'

const SearchBar = ({setFilterText, setInStockOnly})=>{
    return (
        <form className='SearchBar'>
            <SearchBarInput onFilterTextChange={setFilterText}/>
            <SearchBarOption onInStockOnlyChange={setInStockOnly}/>
        </form>
    )
}

export default SearchBar