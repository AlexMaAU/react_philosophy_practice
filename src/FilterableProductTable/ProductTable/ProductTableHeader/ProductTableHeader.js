import HeaderText from './HeaderText'
import './ProductTableHeader.css'

const ProductTableHeader = ()=>{
    return (
        <div className='productTableHeader'>
            <HeaderText text={'Name'}/>
            <HeaderText text={'Price'}/>
        </div>
    )
}

export default ProductTableHeader