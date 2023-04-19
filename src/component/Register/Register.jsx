import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProviders';

const Register = () => {

  const {user, createUser} = useContext(AuthContext);

const handelRegister = event =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  event.target.reset();
  createUser(email, password)
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser);
    
    
})
.catch(error => {
    console.error(error.message);
})
}


      return (
            <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col">

<h1 className="text-5xl font-bold text-center my-4">Please Sign Up!</h1>

<form onSubmit={handelRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<div className="card-body">
  <div className="form-control">
    <label className="label">
      <span className="label-text">Name</span>
    </label>
    <input type="text" name="name" placeholder="name" className="input input-bordered" />
  </div>
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
  </div>
  <div className="form-control mt-6">
    <button className="btn btn-primary">sign up</button>
  </div>
  <label className="label">
      
      <p className='font-semibold'>Already have an account? <Link to="/login"><button className='btn btn-link text-blue-600 hover:text-red-600'>Login</button></Link></p>
    </label>
</div>
</form>

</div>
</div>
      );
};

export default Register;