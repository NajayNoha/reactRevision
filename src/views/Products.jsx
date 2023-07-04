import axios from 'axios';
import React, { useEffect } from 'react';
import { setLoading, setProducts } from './../store/reducers/productsSlice'
import { useDispatch, useSelector} from 'react-redux';
import './style/products.css';


const Products = () => {
    const p = useSelector((state)=>state.products);
    const dispatch = useDispatch();
    useEffect(()=>{
        axios.get('https://api.escuelajs.co/api/v1/products?limit=12&offset=0')
        .then(res=>{
            dispatch(setProducts(res.data))
            dispatch(setLoading(false))
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])
    console.log(p.products);
    return (
        <div>
            {p.loading && <div className="loading">loading .. </div> }
            {!p.loading && <div className="products">
                {p.products.map(e=>{
                    return (
                        <div className="p" key={e.id}>
                            <div className="image">
                                <img src={e.images[0]} alt={e.description} />
                            </div>
                            <div className="title">{e.title} <span className="price">{e.price} $</span></div>
                        </div>
                    )
                })}
            </div>}
        </div>
    );
}

export default Products;
