import React from 'react'
import Navbar from './Navbar'

const Employeeform = () => {
  const submt=()=>{
    alert('Data is submitted')
  }
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row g-5">
          <div className="col col-12 col-sm-12 col-md-12">

           <div className="row g-3 mt-3">
            <div className="col col-6 col-sm-6 col-md-6">
              <label htmlFor="Name" className="formlabel">Name</label><br></br><br></br>
              <input type="text" name="" id=""className='form-control' />
            </div>
           </div>
           <div className="row mt-3  ">
            <div className="col col-12 col-sm-6 col-md-6">
              <label htmlFor="Name" className="formlabel">Designation</label><br></br><br></br>
              <input type="text" name="" id=""className='form-control' />
            </div>
           </div>
           <div className="row  mt-3 ">
            <div className="col col-12 col-sm-6 col-md-6">
              <label htmlFor="Name" className="formlabel">Location</label><br></br><br></br>
              <input type="text" name="" id=""className='form-control' />
            </div>
           </div>
           <div className="row mt-3  ">
            <div className="col col-12 col-sm-6 col-md-6">
              <label htmlFor="Name" className="formlabel">Salary</label><br></br><br></br>
              <input type="text" name="" id=""className='form-control' />
            </div>
           </div>
            <button className="btn btn-success mt-3" onClick={submt}>Submit</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Employeeform