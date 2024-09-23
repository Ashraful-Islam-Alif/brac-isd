<<<<<<< HEAD
import { useState } from "react";

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      // Mock sending email process
      if (email) {
        console.log(`Sending subscription confirmation to ${email}`);
        // You would replace the below line with an actual API call to send the email
        setTimeout(() => {
          setMessage('Subscription confirmation sent to your email!');
        }, 1000);
      } else {
        setMessage('Please enter a valid email address.');
      }
    };
  
    return (
      <div className="mt-8 px-8 py-12">
        <h2 className="text-5xl font-bold text-center">
          Subscribe to our newsletter
        </h2>
        <p className="text-slate-400 text-center mt-4">
          Latest Updates, Discount Coupons, and Free Skill Development Materials
        </p>
        <form onSubmit={handleSubmit} className="grid justify-items-center">
          <label className="input input-bordered flex items-center gap-2 w-1/2 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="btn btn-primary mt-4">
            Subscribe
          </button>
        </form>
        {message && <p className="text-center mt-4 text-green-500">{message}</p>}
      </div>
    );
  };
  
  export default Subscribe;
=======
import { useState } from "react";

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      // Mock sending email process
      if (email) {
        console.log(`Sending subscription confirmation to ${email}`);
        // You would replace the below line with an actual API call to send the email
        setTimeout(() => {
          setMessage('Subscription confirmation sent to your email!');
        }, 1000);
      } else {
        setMessage('Please enter a valid email address.');
      }
    };
  
    return (
      <div className="mt-8 px-8 py-12">
        <h2 className="text-5xl font-bold text-center">
          Subscribe to our newsletter
        </h2>
        <p className="text-slate-400 text-center mt-4">
          Latest Updates, Discount Coupons, and Free Skill Development Materials
        </p>
        <form onSubmit={handleSubmit} className="grid justify-items-center">
          <label className="input input-bordered flex items-center gap-2 w-1/2 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="btn btn-primary mt-4">
            Subscribe
          </button>
        </form>
        {message && <p className="text-center mt-4 text-green-500">{message}</p>}
      </div>
    );
  };
  
  export default Subscribe;
>>>>>>> 8a932e4 (Added Retail and Sales course)
  