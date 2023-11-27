import React, { useState, useEffect } from 'react';
import axios from "axios";

const Inventory = () => {
    const [state, setState] = useState([]);
    const [products, setproducts] = useState([]);
    const [products2, setproducts2] = useState([]);

    const [edited, setEdited] = useState({})
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
      let mounted = true;
      fetch("http://localhost:8889/products/get-all" 
      ,{
          method: "GET",
          headers: { "Content-Type": "application/json" }
          // body: JSON.stringify(myproducts)
  
      }).then(async response => {
          const data = await response.json();
          // console.log(data);

          setproducts(data);

          data.forEach((product) =>{
           products2[product["id"]] = product;
          });

  
          // console.log("dat2a", edited);
       
      })
  
      return () => mounted = false;
  }, []);

  console.log(products2);

    // const [products, setproducts] = useState([{ id: 1, defaultValue: '' }]);

    const handleAddRow = () => {
        // console.log(products)
      //  const newId = products.length + 1;
        let key2 = Array.from(products2.keys())
        key2  = key2.map((x) =>parseInt(x));
       var newId = Math.max.apply(Math, key2) + 1;
       console.log(newId)

       console.log("new:"+newId)
       setproducts([...products, { id: newId, name: '',quantity:0,description:"",price:0 }]);
       setproducts2([...products2, { id: newId, name: '',quantity:0,description:"",price:0 }]);
       console.log(setproducts2)


    };
   
    const handleDeleteRow = (e) => {
      //  setproducts(products.filter((row) => row.id !== id));
      console.log(e.target);

      // /del-products/{id}
      axios
      .delete("http://localhost:8889/del-products/"+e.target.name)

      .then((response4) => {
        console.log("this is the response: " + response4.data);
      })
      .then(
        (res) => {
          window.location.reload(false);

        },
        (err) => {
          console.log(err);
        }
      );

    };

    function saveput(product3) {
      // console.log(product3)

      axios
      .post("http://localhost:8889/products/edit", product3)

      .then((response4) => {
        console.log("this is the response: " + response4.data);
      })
      .then(
        (res) => {
          
        },
        (err) => {
          console.log(err);
        }
      );
    }
    
    const handleSaveAll = (id)=>{

      // console.log(products);
  
      // products2.forEach(saveput);

      for (var key in products2) {
        if (products2.hasOwnProperty(key)) {
          saveput(products2[key])
        }
    }

      // console.log(products[key]);

      setIsButtonVisible(false);

      window.location.reload(false);

   };
 
   
    const handleInputChange = (e, id) => {
      console.log(e.target.name);

      setIsButtonVisible(true);

      let iid = e.target.name
    
        // edited[iid-1] = true;
      console.log(products2);
      

      products2[iid][e.target.id] = e.target.value
      // console.log(temp);

       console.log(e.target.value);
       console.log(edited);


    };

 
  

    const handleClick = () => {
        // Add any button click handling logic here
    };

    return (
        <div className="container">

        <div>
          <main>
    <div className="py-5 text-center">
      {/* <img className="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
      <h2>Inventory form</h2>
</div>

    <div className="row g-5">
    
      <div className="col-md-9 col-lg-12">

       
        <div className="row g-3">
        <div className="row g-6">
        <div className="col-md-3">Name</div>
        <div className="col-md-1">Qty</div>
        <div className="col-md-4">Description</div>
        <div className="col-md-1">Price</div>
          </div>
        </div>
        <br/>

          <div className="row g-3">



          {products.map(d => (


            <div className="row g-6">
            
            <div className="col-md-3">
              <input type="text" className="form-control" id="name" name={d.id} placeholder="" defaultValue={d.name} onChange={handleInputChange} required/>
              <div className="invalid-feedback">
                Valid name is required.
              </div>
        <br/>

            </div>

            <div className="col-md-1">
              {/* <label for="lastName" className="form-label">Qty</label> */}
              <input type="text" className="form-control" id="quantity" name={d.id} placeholder="" defaultValue={d.quantity} onChange={handleInputChange} required/>
              <div className="invalid-feedback">
                Valid quantity is required.
              </div>
            </div>

            <div className="col-md-4">
              {/* <label for="lastName" className="form-label">Description</label> */}
              <input type="text" className="form-control" id="description" name={d.id} placeholder="" defaultValue={d.description} onChange={handleInputChange} required/>
              <div className="invalid-feedback">
                Valid quantity is required.
              </div>
            </div>
            <div className="col-md-1">
              {/* <label for="lastName" className="form-label">Price</label> */}
              <input type="text" className="form-control" id="price" placeholder="" name={d.id} defaultValue={d.price} onChange={handleInputChange} required/>
              <div className="invalid-feedback">
                Valid quantity is required.
              </div>
            </div>
            <div className="col-md-1">
            {/* <label for="lastName" className="form-label">delete</label> */}

            <button
          className="w-100 btn btn-danger btn-md"
          // type="submit"
          name={d.id}
          onClick={handleDeleteRow}
        >
          Delete
        </button>


            </div>
            



            
            </div>

 
            // </form>
            ))}

            <div className="col-md-1  ">
            <button
        className="btn btn-primary add-row-button"
        onClick={handleAddRow}
      >
        Add Row
      </button>
      {isButtonVisible && (
        <button
          className=" btn btn-success btn-md"
          // type="submit"
          onClick={handleSaveAll}
        >
          Save
        </button>
      )}
            </div>

            <div className="col-md-2">
      {/* ... */}

    </div>
          </div>

          <hr className="my-4"/>
{/* 
          <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleClick}>Continue to checkout</button> */}
        {/* </form> */}
      </div>
    </div>
  </main>

        </div>
        </div>

    );
};

export default Inventory;