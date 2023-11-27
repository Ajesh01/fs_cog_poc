import React, { useState, useEffect } from 'react';
import './Homepage.css';

function Homepage() {

  const [products, setproducts] = useState([])

  useEffect(() => {
    let mounted = true;
    fetch("http://localhost:8889/products/get-all" 
    ,{
        method: "GET",
        headers: { "Content-Type": "application/json" }
        // body: JSON.stringify(myproducts)

    }).then(async response => {
        const data = await response.json();

        setproducts(data);

        console.log("data", data);
     
    })

    return () => mounted = false;
}, []);



    return (
      <div >
      <main>

{/* <section className="py-5 text-center container">
  <div className="row py-lg-5">
    <div className="col-lg-6 col-md-8 mx-auto">
      <h1 className="fw-light">Album example</h1>
      <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
      <p>
        <a href="#" className="btn btn-primary my-2">Main call to action</a>
        <a href="#" className="btn btn-secondary my-2">Secondary action</a>
      </p>
    </div>
  </div>
</section> */}

<div className="album py-5 bg-body-tertiary">
  <div className="container">


    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

    {products.map(d => (
  // <li key={d.id}>{d.name}</li>
  <div className="col">
  <div className="card shadow-sm">
    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>{d.name}</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">{d.name}</text></svg>
    <div className="card-body">
      <p className="card-text">{d.description}</p>
      <div className="d-flex justify-content-between align-items-center">
      <small className="text-body-secondary">${d.price}</small>
        <div className="btn-group">
          <button type="button" className="btn btn-sm btn-outline-primary">View</button>
          <button type="button" className="btn btn-sm btn-outline-success">Add to cart</button>
        </div>
        
      </div>
    </div>
  </div>
</div>
  
  
  ))} 


  
     
    </div>
  </div>
</div>

</main>
      </div>
    );
  }
  
  export default Homepage;
  