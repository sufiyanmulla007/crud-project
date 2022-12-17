import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Updated = () => {
const [id,setId]=useState(0);
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const Navigate=useNavigate();
useEffect(()=>{
setId(localStorage.getItem("id"));
setName(localStorage.getItem("name"));
setEmail(localStorage.getItem("email"));
},[])
const handleUpdate=(e)=>{
    e.preventDefault();
axios.put(`https://6396d8ec86d04c7633826ce3.mockapi.io/CRUDAPP/${id}`,
{
    name:name,
    email:email
}
).then(()=>{
    Navigate("/Read")
});
};
  return (
    <>
    <h2>Updated</h2>
    <form>
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" 
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
    </div>
    
  <button type="submit" className="btn btn-primary mx-2"
   onClick={handleUpdate}
  >Updated</button>
  <Link to="/Read">
  <button type="button" className="btn btn-secondary mx-2">Back</button>
  </Link>
</form>
    </>
  );
};

export default Updated;
