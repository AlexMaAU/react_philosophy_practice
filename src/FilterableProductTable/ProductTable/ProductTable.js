import ProductTableHeader from './ProductTableHeader'
import ProductTableSection from './ProductTableSection'

const ProductTable = ({categoryRows, value})=>{
    return (
        <div>
            <ProductTableHeader/>
            {
                // map each category, as a Table data Section
                categoryRows.map((data, index)=>{
                    return <ProductTableSection category={data.category} value={value} key={index}/>
                })
            }
        </div>
    )
}

export default ProductTable