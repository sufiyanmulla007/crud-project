import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
const[data,setData]=useState([]);
const [search,setSearch]=useState("");
const getdeta=()=>{
  axios.get('https://6396d8ec86d04c7633826ce3.mockapi.io/CRUDAPP')
  .then((res)=>{
   console.log(res.data);
   setData(res.data);
  });
}
 const handledelet=(id)=>{
axios.delete(`https://6396d8ec86d04c7633826ce3.mockapi.io/CRUDAPP/${id}`
).then(()=>{
  getdeta()
})
}
const setLocalStoreg=(id,name,email)=>{
localStorage.setItem("id",id)
localStorage.setItem("name",name);
localStorage.setItem("email",email);
}
useEffect(()=>{
  getdeta();
},[search]);
const handelsearch=(e)=>{
 setSearch(e.target.value.toLowerCase());
};
 const handelsearchbtn=(e)=>{
  e.preventDefault();
 console.log("sraech btn")
  const searchdata =data.filter((el)=>{
  if(el=== ""){
  return el
  }
  else{
  return(el.name.toLowerCase().includes(search)||el.email.toLowerCase().includes(search) )
  }
  })
  
  setData(searchdata)
console.log(data)
 }
  return (
    <>
    <div className='d-flex justify-content-between m-2'>
    <h2>Read Operation</h2>
    <div className="mb-3">
    {/* <input type="search" class="form-control"/> */}
     <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Search"
    onChange={handelsearch}
    />
    <button className="btn btn-outline-success" type="submit"
    onClick={(e)=>handelsearchbtn(e)}
    >Search</button>
    </form>
    </div>
    <Link to="/">
    <button type="button" class="btn btn-info">Create</button>
    </Link>
    </div>
    <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    //search
    // data.filter((el)=>{
    // if(el=== ""){
    // return el
    // }
    // else{
    // return(el.name.toLowerCase().includes(search)||el.email.toLowerCase().includes(search) )
    // }
    // })
    data.map((eachdata)=>{
      return(
      <>
      <tbody>
    <tr>
      <th scope="row">{eachdata.id}</th>
     <td>{eachdata.name}</td>
      <td>{eachdata.email}</td>
      <td>
      <Link to="/Update">
      <button type="button" className="btn btn-success" 
      onClick={()=>setLocalStoreg(
        eachdata.id,
        eachdata.name,
        eachdata.email
        )}
      >Edit</button>
      </Link>
      </td>
      <td><button type="button" className="btn btn-danger"
      onClick={()=>handledelet(eachdata.id)}
      >Delete</button></td>
    </tr>
   </tbody>
      </>
      );
    })
    }
</table>
    </>
  );
};

export default Read
