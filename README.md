## Composición

Una buena estrategia al crear componentes es que sean pequeños y re-utilizables. Nuestros componentes pueden contener otros componentes más pequeños por ejemplo:

![Untitled](Introduccio%CC%81n%20a%20React%2030e6507662ce4d67be168095134ca151/Untitled%202.png)

Tabla de productos con posibilidad de filtrar por nombre

Para diseñar este componente en React lo dividimos en sub-componentes:

- App
    - H1
    - FiltrableProductTable
        - SearchBar
        - ProductTable
            - Product

El código completo de esta aplicación está en el siguiente repositorio de GitHub.

[GitHub - cmo7/ejemplo-tabla](https://github.com/cmo7/ejemplo-tabla)

### Componente FilterableProductTable

```jsx
const FilterableProductTable = ({ products }) => {
    const [query, setQuery] = useState("");
    const searchKey = Object.keys(products[0])[0];
    return (
        <div className="filtrable-product-table">
            <SearchBar
                callback={setQuery} />
            <div className="header row">
                {Object.keys(products[0]).map(x => <div> {x.toUpperCase()} </div>)}
            </div>
            <ProductTable
                products={query
                    ? products.filter(p => p[searchKey].includes(query)) 
                    : products} />
        </div>
    )
}
```

- Este componente recibe en props solo un array de productos.
- Las props están deconstruidas `{ products }`
- El componente es funcional pero usa el Hook `useState` para crear un estado "`query`" con su función set correspondiente.
- En searchKey guardamos el nombre del campo que usaremos para filtrar los resultados.
- El componente `SearchBar` recibe una función callback para poder usarla para modificar el valor de query con su input.
- Dentro de un div con la clase header pintamos los nombres de todas las claves de uno de los objetos del array. Se podrían pintar los nombres "a mano" también.
- El componente product table recibe un array de productos.
    - Si query es undefined, null o cadena vacia, le pasamos el array products intacto.
    - En cualquier otro caso pasamos un array products filtrado, donde el campo `searchKey` tiene que contener el `query`.

### Componente SearchBar

```jsx
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
```

- El componente SearchBar utiliza un ref (creado con useRef) para almacenar el input que contiene en su render.
- El componente contiene una función handleOnChange para gestionar el cambio del imput. Esta función simplemente utiliza la función callback recibida en props (los props están deconstruidos) pasando el valor actual del ref como parámetro.
- En cuanto a renderizado, simplemente pinta un div con un label y un imput. El imput tiene asignados el ref y el onChange correspondientes.

### Componente ProductTable

```jsx
const ProductTable = ({ products }) => {
    return (
        <div>
            {products.map(product => <Product key={product.name} data={product} />)}
        </div>
    )
}
```

- Recibe un array de productos crea un componente Product para cada uno.

Componente Product

```jsx
const Product = ({ data }) => {
    return (
        <div className="product row">
            {Object.values(data).map(x => <div> {x} </div>)}
        </div>
    )
}
```

- Recibe unos datos en forma de objeto. Convierte los valores del objeto en un array y pinta cada uno en un div.

### App.css

```css
.row {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
}

.search-bar {
  display: flex;
  justify-content: space-between;
  margin: auto;
}

.search-bar input {
 width: 80%;
 margin-left: 25px;
}

.header {
  border-bottom: 2px solid black;
  padding-bottom: 5px;
  margin-bottom:5px;
}

.filtrable-product-table {
  margin: auto;
  padding: 15px;
  width: 800px;
  border: 1px solid black;
}

h1 {
  text-align: center;
}
```

Simplemente las clases necesarias para mostrar la aplicación como aparece en los ejemplos.