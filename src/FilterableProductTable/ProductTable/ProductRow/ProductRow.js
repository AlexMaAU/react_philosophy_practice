import ProductName from './ProductName'
import ProductPrice from './ProductPrice'
import './ProductRow.css'

const ProductRow = ({name,price})=>{
    return (
        <div className='ProductRow'>
            <ProductName name={name}/>
            <ProductPrice price={price}/>
        </div>
    )
}

export default ProductRow