import React, { useState, useEffect } from 'react';

const Inventory = () => {
    const [state, setState] = useState([]);
    const [products, setproducts] = useState([])
    const [isButtonVisible, setIsButtonVisible] = useState(false);


    // const [products, setproducts] = useState([{ id: 1, defaultValue: '' }]);

    const handleAddRow = () => {
       const newId = products.length + 1;
       setproducts([...products, { id: newId, name: '',quantity:0,description:"",price:0 }]);
    };
   
    const handleDeleteRow = (id) => {
       setproducts(products.filter((row) => row.id !== id));
    };
   
    const handleInputChange = (e, id) => {
       const newproducts = products.map((row) =>
         row.id === id ? { ...row, defaultValue: e.target.defaultValue } : row
       );
       setproducts(newproducts);
       setIsButtonVisible(true);

    };

    useEffect(() => {
      let mounted = true;
      fetch("http://localhost:8888/products/get-all" 
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
  

    const handleClick = () => {
        // Add any button click handling logic here
    };

    return (
        <div className="container">

        <div>
          <main>
    <div className="py-5 text-center">
      <img className="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
      <h2>Inventory form</h2>
      {/* <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}
    </div>

    <div className="row g-5">
      {/* <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Second product</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Third item</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">−$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>

        <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code"/>
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </form>
      </div> */}
      <div className="col-md-9 col-lg-9">
        {/* <h4 className="mb-3">Inventory</h4> */}
        <form className="needs-validation" novalidate>
          <div className="row g-3">



          {products.map(d => (
            <div className="row g-6">
            
            <div className="col-md-4">
              <label for="Name" className="form-label">Name</label>
              <input type="text" className="form-control" id="Name" placeholder="" defaultValue={d.name} onChange={handleInputChange} required/>
              <div className="invalid-feedback">
                Valid name is required.
              </div>
            </div>

            <div className="col-md-2">
              <label for="lastName" className="form-label">Qty</label>
              <input type="text" className="form-control" id="lastName" placeholder="" defaultValue={d.quantity} onChange={handleInputChange} required/>
              <div className="invalid-feedback">
                Valid quantity is required.
              </div>
            </div>

            <div className="col-md-4">
              <label for="lastName" className="form-label">Description</label>
              <input type="text" className="form-control" id="lastName" placeholder="" defaultValue={d.description} onChange={handleInputChange} required/>
              <div className="invalid-feedback">
                Valid quantity is required.
              </div>
            </div>
            <div className="col-md-2">
              <label for="lastName" className="form-label">Price</label>
              <input type="text" className="form-control" id="lastName" placeholder="" defaultValue={d.price} onChange={handleInputChange} required/>
              <div className="invalid-feedback">
                Valid quantity is required.
              </div>
            </div>
            <div className="col-md-2">
            <button
          className="w-100 btn btn-danger btn-md"
          type="submit"
          onClick={handleDeleteRow}
        >
          Delete
        </button>
            </div>
            



            
            </div>))}

            <div className="col-md-2">
            <button
        className="btn btn-primary add-row-button"
        onClick={handleAddRow}
      >
        Add Row
      </button>
            </div>

            <div className="col-md-2">
      {/* ... */}
      {isButtonVisible && (
        <button
          className="w-100 btn btn-success btn-md"
          type="submit"
        //   onClick={toggleButtonVisibility}
        >
          Save
        </button>
      )}
    </div>

            {/* <div className="col-12">
              <label for="username" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Username" required/>
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label for="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
            </div>

            <div className="col-md-5">
              <label for="country" className="form-label">Country</label>
              <select className="form-select" id="country" required>
                <option defaultValue="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-4">
              <label for="state" className="form-label">State</label>
              <select className="form-select" id="state" required>
                <option defaultValue="">Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label for="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" placeholder="" required/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="same-address"/>
            <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info"/>
            <label className="form-check-label" for="save-info">Save this information for next time</label>
          </div>

          <hr className="my-4"/>

          <h4 className="mb-3">Payment</h4>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required/>
              <label className="form-check-label" for="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required/>
              <label className="form-check-label" for="debit">Debit card</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required/>
              <label className="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label for="cc-name" className="form-label">Name on card</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required/>
              <small className="text-body-secondary">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div className="col-md-6">
              <label for="cc-number" className="form-label">Credit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required/>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-expiration" className="form-label">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div> */}
          </div>

          <hr className="my-4"/>

          <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleClick}>Continue to checkout</button>
        </form>
      </div>
    </div>
  </main>

        </div>
        </div>

    );
};

export default Inventory;