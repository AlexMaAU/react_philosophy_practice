import ProductTableHeader from './ProductTableHeader'
import ProductTableSection from './ProductTableSection'

const ProductTable = ()=>{
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

    console.log(categoryRows)  //[{category: 'Fruits'}, {category: 'Vegetables'}]

    return (
        <div>
            <ProductTableHeader/>
            {
                // map each category, as a Table data Section
                categoryRows.map((data)=>{
                    return <ProductTableSection category={data.category} value={PRODUCTS} key={data.category}/>
                })
            }
        </div>
    )
}

export default ProductTable