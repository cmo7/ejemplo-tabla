import { useState, useRef } from "react";

const SearchBar = ({ callback }) => {

    const queryValue = useRef();

    const handleOnChange = () => {
        callback(queryValue.current.value);

    }
    return (
        <div className="search-bar">
            <label htmlFor="query">
                Filtrar:
            </label>
            <input
                id="query"
                ref={queryValue}
                onChange={handleOnChange}
            />
        </div>
    )
}

const Product = ({ data }) => {
    return (
        <div className="product row">
            {Object.values(data).map(x => <div> {x} </div>)}
        </div>
    )
}

const ProductTable = ({ products }) => {
    return (
        <div>
            <div className="header row">
                {Object.keys(products[0]).map(x => <div> {x.toUpperCase()} </div>)}
            </div>
        {products.map(product => <Product key={product.name} data={product} />)}
        </div>
    )
}

const FilterableProductTable = ({ products }) => {
    const [query, setQuery] = useState("");
    console.log(`Query: ${query}`)
    console.log(`Filter: ${products.filter(p => p.name.includes(query))}`)
    return (
        <div className = "filtrable-product-table">
            <SearchBar
                callback={setQuery} />
            <ProductTable
                products={query ? products.filter(p => p.name.includes(query)) : products} />
        </div>
    )
}

export default FilterableProductTable;