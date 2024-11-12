import { useState } from 'react';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';
import Rating from './components/Rating';
import './App.css';

const App = () => {
  const validateEmail = (value) => {
    if (!value) return 'Email is required';
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return '';
  };

  const products = [
    { title: 'Tumbler', price: 10, imageUrl: 'https://prod-eurasian-res.popmart.com/default/20240201_114644_331726__1200x1200.jpg?x-oss-process=image/format,webp', rating: 4.5 },
    { title: 'Mouse', price: 25, imageUrl: 'https://prod-eurasian-res.popmart.com/default/20240201_114658_730372__1200x1200.jpg?x-oss-process=image/format,webp', rating: 3.8 },
    { title: 'Keyboard', price: 45, imageUrl: 'https://prod-eurasian-res.popmart.com/default/20240201_114653_761508__1200x1200.jpg?x-oss-process=image/format,webp', rating: 4.2 },
    { title: 'Microphone', price: 50, imageUrl: 'https://down-th.img.susercontent.com/file/cn-11134207-7r98o-lr8annjs023x46', rating: 5 }
  ];

  const [alert, setAlert] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const emailValidationMessage = validateEmail(email);

    if (!password) {
      setAlert({
        title: 'Warning!',
        type: 'warning',
        message: 'Password is required for registration.',
      });
      return; // Exit the function early if warning is set
    }
    
    if (emailValidationMessage) {
      setAlert({
        title: 'Error ',
        type: 'error',
        message: emailValidationMessage,
      });
    } else {
      setAlert({
        title: 'Successfully Submitted! ',
        type: 'success',
        message: 'Your form has been submitted successfully.',
      });
    }
  };  
  
  return (
    <div className="app-container">
      <h1>Sign Up</h1>

      {alert && <Alert title={alert.title} type={alert.type} message={alert.message} />}

      <form onSubmit={handleSubmit}>
        <Input 
          label="First Name" 
          placeholder="Enter your first name" 
          color="blue" 
          size="medium" 
          name="firstName" 
        />
        <Input 
          label="Last Name" 
          placeholder="Enter your last name" 
          color="green" 
          size="medium" 
          name="lastName" 
        />
        <Input 
          label="Email" 
          type="email" 
          placeholder="Enter your email" 
          color="red" 
          size="large" 
          validation={validateEmail} 
          name="email" 
        />
        <Input 
          label="Password" 
          type="password" 
          placeholder="Enter your password" 
          color="purple" 
          size="small" 
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="separator"></div>
      <h1>Our Products</h1>
      <div className="cards-container">
        {products.map((product, index) => (
          <Card key={index} title={product.title} price={product.price} imageUrl={product.imageUrl} />
        ))}
      </div>
      <div className="separator"></div>
      <h1>Rate Our Product</h1>
      <Rating value={4.5} maximumValue={5} />

    </div>
  );
};

export default App;