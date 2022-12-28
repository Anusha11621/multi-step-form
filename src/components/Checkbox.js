import React from 'react'
import './checkbox.css'

function Checkbox(props) {
  return (
    <div>
        <div className="container-fluid ">
      <div className="row">
      <div className='col-lg-4 '>
        <img src='https://images.unsplash.com/photo-1524865291454-215bdc75819e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' alt='forms' className=' d-none d-lg-block' ></img>
      </div>
      <div className='col-lg-8'>
        <div className='d-flex flex-wrap'>
          <div className='d-flex m-3 align-items-center'>
            <p className='bg-light rounded p-2 pl-3 pr-3 text-primary mr-2'>✓</p>
            <p>SignUp</p>
          </div>
          <div className='d-flex m-3 align-items-center'>
            <p className='bg-light rounded p-2 pl-3 pr-3 text-primary mr-2'>✓</p>
            <p>Message</p>
          </div>
          <div className='d-flex m-3 align-items-center'>
            <p className='bg-primary rounded p-2 pl-3 pr-3 text-light mr-2'>3</p>
            <p>Checkbox</p>
          </div>
        </div>
        <hr></hr>
        <div className='signup'>
          <p>Step3/3</p>
          <h3>Checkbox</h3>
          <br></br>
          
        </div>
        <hr></hr>
        <div className='d-flex justify-content-end'>
          <button className='btn ' onClick={()=>{return props.listener('decrease')}}>Back</button>
          <button className='btn btn-primary' onClick = {()=>{
            alert('Form Submitted')
            // location.reload()
            // window.location.reload()
            window.location.reload()
          }}>Submit</button>
        </div>
      </div>
    </div>
    </div>
        
        
    </div>
  )
}

export default Checkbox