const SearchBarInput = ({onFilterTextChange})=>{
    return (
        <div>
            <input type="text" placeholder="Search..." onChange={(e)=>{
                onFilterTextChange(e.target.value)
                }}/>
        </div>
    )
}

export default SearchBarInput