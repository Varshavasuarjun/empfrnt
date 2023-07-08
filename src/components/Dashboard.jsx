import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Dashboard = () => {
    const [data,setData]=useState([])

    const userData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
    }
    useEffect(()=>{
        userData()
    },[])

    return (
        <div>
            <Navbar />
            <table class="table caption-top">
  <caption ><h4>Employee Data</h4></caption>
  <thead mr-5 >
    <tr>
      <th scope="col ">id</th>
      <th scope="col">Name</th>
      <th scope="col">E-mail</th>
     
    </tr>
  </thead>
  <tbody >
    {data.map((value,i)=>{
        return <tr key={i}>
            <th>{value.id}</th>
            <th>{value.name}</th>
            <th>{value.email}</th>

        </tr>
    })}
   
   

  </tbody>
</table>

        </div>
    )
}

export default Dashboard