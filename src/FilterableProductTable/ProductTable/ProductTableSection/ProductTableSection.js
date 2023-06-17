import ProductCategoryRow from '../ProductCategoryRow'
import ProductRow from '../ProductRow'

const ProductTableSection = ({category, value})=>{
    // map all PRODUCTS, find out products of current category
    // store into new array - tableSectionValueArray
    const tableSectionValueArray = []
    value.map((item)=>{
        if(item.category === category) {
            tableSectionValueArray.push(item)
        }
    })
    return (
        <div>
            <ProductCategoryRow category={category}/>
            {
                // map tableSectionValueArray, display data list under each Category Section
                tableSectionValueArray.map((list, index)=>{
                    return <ProductRow name={list.name} price={list.price} key={index}/>
                })
            }
        </div>
    )
}

export default ProductTableSection
