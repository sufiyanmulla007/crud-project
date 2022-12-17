import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
//validation
const [validation,setValidation]=useState("");


const history = useNavigate();
const handlesubmit= (e)=>{
e.preventDefault();
console.log("clciekd");

if(name === ""){
 setValidation("Enter your  Name field")
}else if(email === ""){
  setValidation("enter your Email field")
}else{

axios.post('https://6396d8ec86d04c7633826ce3.mockapi.io/CRUDAPP',
{
    name:name,
    email:email,
    
})

.then(()=>{
  history("/Read");
  setValidation("");
});}

};
  return (
    <>
    <div className='d-flex justify-content-between m-2'>
    <h2>Create</h2>
    <Link to="/Read">
    <button type="button" class="btn btn-primary">ShowData</button>
    </Link>
    </div>
    <form>
    <div className="mb-3">
    <p style={{color:"red"}}>{validation}</p>
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" name='name' className="form-control"
    onChange={(e)=>setName(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='email' className="form-control" aria-describedby="emailHelp"
    onChange={(e)=>setEmail(e.target.value)}
    />
    </div>
    
  <button type="submit" className="btn btn-primary"
   onClick={handlesubmit}
  >Submit</button>
</form>
    </>
  );
};

export default Create;
