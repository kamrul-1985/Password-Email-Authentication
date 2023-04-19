import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProviders';

const LogIn = () => {
  const {user, signIn} = useContext(AuthContext);


  const handelLogIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    event.target.reset();
    signIn (email, password)
  .then(result => {
    const loggedUser = result.user;
    event.target.reset();
})
.catch(error => {
    console.error(error.message);
})
  }

      return (
            <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col">

<h1 className="text-5xl font-bold text-center my-4">Please Login!</h1>

<form onSubmit={handelLogIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<div className="card-body">
  <div className="form-control">
    <label className="label">
      <span className="label-text">Email</span>
    </label>
    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Password</span>
    </label>
    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
    <label className="label">
      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
    </label>
  </div>
  <div className="form-control mt-6">
    <button className="btn btn-primary">Login</button>
  </div>
  <label className="label">
      
      <p className='font-semibold'>First time in daisyUI? <Link to="/register"><button className='btn btn-link text-blue-600 hover:text-red-600'>Register</button></Link></p>
    </label>
</div>
</form>
</div>
</div>
      );
};

export default LogIn;