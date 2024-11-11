import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const fields = [
    { label: 'First Name', name: 'firstName', type: 'text' },
    { label: 'Last Name', name: 'lastName', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Password', name: 'password', type: 'password' }
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const products = [
    {
      name: 'Earthen Bottle',
      price: 48.00,
      image: 'https://prod-eurasian-res.popmart.com/default/20240204_142716_400098__1200x1200.jpg?x-oss-process=image/format,webp',
    },
    {
      name: 'Nomad Tumbler',
      price: 35.00,
      image: 'https://prod-eurasian-res.popmart.com/default/1_zz0gfOF8qz_1200x1200.jpg?x-oss-process=image/format,webp',
    },
    {
      name: 'Focus Paper Refill',
      price: 89.00,
      image: 'https://prod-eurasian-res.popmart.com/default/1_X8ltv4qiy2_1200x1200.jpg?x-oss-process=image/format,webp',
    },
    {
      name: 'Machined Mechanical Pencil',
      price: 35.00,
      image: 'https://prod-eurasian-res.popmart.com/default/20240201_143236_285807__1200x1200.jpg?x-oss-process=image/format,webp',
    },
    {
      name: 'Focus Card Tray',
      price: 64.00,
      image: 'https://prod-eurasian-res.popmart.com/default/8_P5EagAc8aF_1200x1200.jpg?x-oss-process=image/format,webp',
    },
    {
      name: 'Focus Multi-Pack',
      price: 39.00,
      image: 'https://prod-eurasian-res.popmart.com/default/12_A1QjdrUNq2_1200x1200.jpg?x-oss-process=image/format,webp',
    },
    {
      name: 'Brass Scissors',
      price: 50.00,
      image: 'https://prod-eurasian-res.popmart.com/default/2_rUJRZc1GtL_1200x1200.jpg?x-oss-process=image/format,webp',
    },
    {
      name: 'Focus Carry Pouch',
      price: 32.00,
      image: 'https://prod-america-res.popmart.com/default/4_FU2Q4AdVTq_1200x1200.jpg?x-oss-process=image/format,webp',
    },
  ];

  return (
    <div>
      <form>
        <h2>Register</h2>
        {fields.map((field) => (
          <div key={field.name}>
            <label>
              {field.label}:
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              />
            </label>
            <br />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      
      <div className="product-list">
        <h2>Product List</h2>
        <div className="product-container">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <img
                src={product.image}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;