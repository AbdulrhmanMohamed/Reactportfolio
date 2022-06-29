import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';


function Shop() {
    
     // create functio to call the api 
     let [products,setProducts]=useState([])
     useEffect(() => {
      fetchProduct();
     
       return () => {
         console.log('product will unMount')
       }
     }, [])
     
     
     const fetchProduct=()=>{
  
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              setProducts(json);
              console.log(json)
            })
      }

     
        return (<div className="container">
            <div className="row g-2">
                {
                  products.map((ele,indx)=>{
                    return (
                      <div className="col-lg-3 col-md-4" key={indx}>
                        <Link to={`/shop/${ele.id}`}  style={{textDecoration:'none'}}>
                          <div className="card">
                            <div className="card-body">

                          <img className='' src={ele.image} alt=""  style={{width:'250px',height:'250px'}}/>
                          <h4 className="card-title">{ele.title}</h4>
                          <p className="card-text">{ele.category}</p>
                          <p className='card-text lead'>{ele.price}</p>
                            </div>

                          </div>
                        </Link>
                      
                      </div>
                    )
                  })
            } 
            </div>
    </div>
        )
}

export default Shop
