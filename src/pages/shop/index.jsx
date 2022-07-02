import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchProducts} from '../../reduxStore/features/shop.slice'

function Shop() {


    const dispatch = useDispatch();

    // create functio to call the api

    let {products, isLoading} = useSelector((state) => state.shopSlice)
    useEffect(() => {
        dispatch(fetchProducts())

    }, [])


    return (
        <div className="container">
            {
            isLoading ? <div className='d-flex flex-column justify-content-center align-items-center' style={{height:'100vh'}}> 
              <div className="spinner-border text-danger" role="status"></div>
            <h2 className=" ">Loading...</h2>
            </div> : <div className="row g-2">
                {
                products.map((ele, indx) => {
                    return (
                        <div className="col-lg-3 col-md-4"
                            key={indx}>
                            <Link to={
                                    `/shop/${
                                        ele.id
                                    }`
                                }
                                style={
                                    {textDecoration: 'none'}
                            }>
                                <div className="card">
                                    <div className="card-body">

                                        <img className=''
                                            src={
                                                ele.image
                                            }
                                            alt=""
                                            style={
                                                {
                                                    width: '250px',
                                                    height: '250px'
                                                }
                                            }/>
                                        <h4 className="card-title">
                                            {
                                            ele.title
                                        }</h4>
                                        <p className="card-text">
                                            {
                                            ele.category
                                        }</p>
                                        <p className='card-text lead'>
                                            {
                                            ele.price
                                        }</p>
                                    </div>

                                </div>
                            </Link>

                        </div>
                    )
                })
            } </div>
        } </div>
    )
}

export default Shop
