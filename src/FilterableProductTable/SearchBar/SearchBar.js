import SearchBarInput from './SearchBarInput'
import SearchBarOption from './SearchBarOption'
import './SearchBar.css'

const SearchBar = ()=>{
    return (
        <form className='SearchBar'>
            <SearchBarInput/>
            <SearchBarOption/>
        </form>
    )
}

export default SearchBar