import React , {useState} from 'react'

function ShippingDetails() {
    const [address, setAddress] = useState();
    const [pincode, setPincode] = useState();
    const [name, setName] = useState();
    const [city, setCity] =useState();
    const [state, setState] = useState();
    const [mobile, setMobile] = useState();
    return (
      <div className="login">
        <div>
          <h1>Shipping Details</h1>
          <h3>Please enter your Delivery Address</h3>
          <form>
            <input
              placeholder="enter name"
              value={name}
              className="formInput"
              name="name"
              minlength="3"
              onChange={(e) => setName(e.target.value)}
              type="string"
              required
            />
            <input
              placeholder="enter your address"
              value={address}
              className="formInput"
              name="address"
              minlength="3"
              onChange={(e) => setAddress(e.target.value)}
              type="string"
              required
            />
            <input
              placeholder="enter your pincode"
              value={pincode}
              className="formInput"
              name="pincode"
              minlength="3"
              onChange={(e) => setPincode(e.target.value)}
              type="number"
              required
            />
            <input
              placeholder="enter city"
              value={city}
              className="formInput"
              name="city"
              minlength="3"
              type="password"
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <input
              placeholder="enter your state"
              value={state}
              className="formInput"
              name="state"
              minlength="3"
              onChange={(e) => setState(e.target.value)}
              type="string"
              required
            />
            <input
              placeholder="enter your contact number"
              value={mobile}
              className="formInput"
              name="mobile"
              minlength="10"
              onChange={(e) => setMobile(e.target.value)}
              type="string"
              required
            />
            <a href='/confirmOrder'><button type="submit">confirm shipping details</button></a>
          </form>
        </div>
      </div>
  )
}

export default ShippingDetails
