import { Cards } from "../../components/Card/Card";
import s from "./CatalogPages.module.css"
import { products } from '../../data/data.js';
import { Search } from "../../components/Search/Search.jsx";
import { useState } from "react";

export function CatalogPage() {
    const [query, setQuery] = useState('');
    const [sorting, setSorting] = useState('');
    const [category, setCategory] = useState(0);
    function sort(e) {
        setSorting(e.target.value);
    }
    function handleChange(e) {
        setQuery(e.target.value);
    }
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase())
            &&
            (product.category == category || category == 0);
    })

    const sortProduct = (sorting, products) => {
        switch (sorting) {
            case 'price_arc':
                return [...products].sort((a, b) => a.price - b.price);
            case 'price_desc':
                return [...products].sort((a, b) => b.price - a.price);
            default:
                return products;
        }
    }
    const sortedFilteredProducts = sortProduct(sorting, filteredProducts);
    return (

        <section className='container'>
            <h1 className="mg">Каталог</h1>
            <div className={s.categories}>
                <h3>Категории: </h3>
                <button onClick={() => setCategory(0)} className={s.btn}>Все</button>
                <button onClick={() => setCategory('Мыши')} className={s.btn}>Мыши</button>
                <button onClick={() => setCategory('Крысы')} className={s.btn}>Крысы</button>
                <button onClick={() => setCategory('Хомяки')} className={s.btn}>Хомяки</button>
            </div>
            <div className={s.block}>
                <Search handleChange={handleChange} />
                <select onChange={sort} className={s.select}>
                    <option value="price_arc">По возрастанию цены</option>
                    <option value="price_desc">По убыванию цены</option>
                </select>
            </div>
            <div className={s.catalog}>
                {
                    sortedFilteredProducts.length ?
                        sortedFilteredProducts.map((product, index) => {
                            return (
                                <Cards key={product.id} {...product} />
                            )
                        })
                        :
                        <p className="error">Ничего не найдено по запросу "{query}"</p>
                }

            </div>
        </section>
    )
}