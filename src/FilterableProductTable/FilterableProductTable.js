import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import React, { useEffect, useState } from 'react'

const FilterableProductTable = ()=>{
    const PRODUCTS = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
    ];
    
    const categoryRows = [];
    let lastCategory = null;

    // map all PRODUCTS, get category arrays
    PRODUCTS.map((product)=>{
        if(product.category !== lastCategory) {
            categoryRows.push({category:product.category})
        }
        lastCategory = product.category
    })

    //console.log(categoryRows)  //[{category: 'Fruits'}, {category: 'Vegetables'}]

    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    const [filterArray, setFilterArray] = useState(PRODUCTS)

    console.log(filterText)

    //once filterText updates, auto filter PRODUCTS array
    useEffect(()=>{
        if(!filterText) {
            return setFilterArray(PRODUCTS)
        }
        const filterProducts = PRODUCTS.filter((product)=>{
            return product.name.toLowerCase().includes(filterText)
        })
        setFilterArray(filterProducts)
        console.log(filterArray)
        console.log(inStockOnly)
    }, [filterText])
    
    return (
        <div>
            <SearchBar setFilterText={setFilterText} setInStockOnly={setInStockOnly}/>
            <ProductTable categoryRows={categoryRows} value={filterArray}/>
        </div>
    )
}

export default FilterableProductTable