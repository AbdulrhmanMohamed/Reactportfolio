import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const urlParams=useParams();
    const [product,setProduct]=useState({});

    useEffect(() => {
        fetchSignleProduct();
    }, [])
    
    const fetchSignleProduct=()=>{
        fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
            .then(res=>res.json())
            .then(json=>{
                setProduct(json);
                console.log(json)
            })
    }
    
    
  return (

     product?    <div className="container">
        <div className="row my-5 text-black bg-light rounded">
            <div className="col-lg-10">
                <div className=" p-4 d-flex align-items-center justify-content-between">
                    <img src={product.image} alt="" className="img-fluid"  style={{height:'350px'}}/>
                   <div className="card-cotent ps-5">
                    <div className="divider bg-primary w-25" style={{margin:'30px 0',height:'5px'}}></div>
                    <h4>{product.title}</h4>
                    <p className='lead'> {product.description}</p>
                    <p>{product.category}</p>
                    <p className='lead text-primary fw-bolder'> {product.price}</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
    :<div className='d-flex align-items-center justify-content-center'>
        <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
    </div>

  )
}

export default Product