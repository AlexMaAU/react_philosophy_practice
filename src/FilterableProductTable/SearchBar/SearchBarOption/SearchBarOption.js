const SearchBarOption = ({onInStockOnlyChange})=> {
    return (
        <div>
            <label>
                <input type="checkbox" onChange={(e)=>onInStockOnlyChange(e.target.checked)}/>
                {' '}
                Only show products in stock
            </label>
        </div>
    )
}

export default SearchBarOption