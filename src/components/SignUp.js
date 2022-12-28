import React from 'react'
import './signup.css'

function SignUp(props) {
    
  return (
    
    <div className="container-fluid ">
    <div className="row">
    <div className='col-lg-4 '>
      <img src='https://images.unsplash.com/photo-1524865291454-215bdc75819e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' alt='forms' className=' d-none d-lg-block' ></img>
    </div>
    <div className='col-lg-8'>
      <div className='d-flex flex-wrap'>
        <div className='d-flex m-3 align-items-center'>
          <p className='bg-primary rounded p-2 pl-3 pr-3 text-light mr-2'>1</p>
          <p>SignUp</p>
        </div>
        <div className='d-flex m-3 align-items-center'>
          <p className='bg-light rounded p-2 pl-3 pr-3  mr-2'>2</p>
          <p>Message</p>
        </div>
        <div className='d-flex m-3 align-items-center'>
          <p className='bg-light rounded p-2 pl-3 pr-3  mr-2'>3</p>
          <p>Checkbox</p>
        </div>
      </div>
      <hr></hr>
      <div className='signup'>
        <p>Step 1/3</p>
        <h3>Sign Up</h3>
        <br></br>
     <div>
        <div >
            <div className='d-flex flex-wrap'>
                <div className='mr-5 mb-3'>
                    <label>First Name</label>
                    <br></br>
                    <input className='rounded p-2 ' id ="firstname" placeholder='Enter your First name' value={props.data.firstname} onChange={props.click}></input>
                    <p className='validation text-danger'></p>
                </div>
                <br></br>
                <div>
                    <label>Last Name</label>
                    <br></br>
                    <input className='rounded p-2 ' id="lastname" placeholder='Enter your Last name' value={props.data.lastname} onChange={props.click} ></input>
                    <p className='lnvalidation text-danger'></p>
                </div>
            </div>
            <br></br>
            <div className='d-flex flex-wrap'>
                <div className='mr-5 mb-3'>
                    <label htmlFor='dob'>Date of Birth</label>
                    <br></br>
                    
                    <input type={'date'} className='rounded p-2  d-flex flex-row-reverse' id='dob'value={props.data.dob} placeholder='Enter your name' onChange={props.click}></input>
                    <p className='dobvalidation text-danger'></p>
                </div>
                <br></br>
                
                <div className='input'>
                    <label>Email Address</label>
                    <br></br>
                    <input  type="email" className='rounded p-2 ' id = "email" value={props.data.email} placeholder='Enter your name' onChange={props.click}></input>
                    <p className='emailvalidation text-danger'></p>
                </div>
                <svg className='icon' style={{opacity:'0'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                        <path d="M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z"/>
                    </svg>
                
            </div>
                 <div>
                    <label>Address</label>
                    <br></br>
                    <input  type="text" className='rounded p-2 ' id = "address" value={props.data.address} placeholder='Enter your name' onChange={props.click}></input>
                    <p className='addressvalidation text-danger'></p>

                </div>
    </div>
        </div>
      </div>
      <hr></hr>
      <div className='d-flex justify-content-end'>
        <button className='btn btn-primary' onClick={()=>{
            let para = document.querySelector('.validation')
            let para1 = document.querySelector('.lnvalidation')
            let para2 = document.querySelector('.dobvalidation')
            let para3 = document.querySelector('.emailvalidation')
            let para4 = document.querySelector('.addressvalidation')
            let firstname = document.getElementById('firstname')
            let lastname = document.getElementById('lastname')
            let email = document.getElementById('email')
            let address = document.getElementById('address')
            let svg = document.querySelector('svg')

            if(props.data.firstname === ""){
                para.innerText = "*First Name is Required" 
                firstname.style.backgroundColor ='rgb(255,160,122,0.3)' 
                firstname.style.border = '1px solid red'     
            }else if(props.data.firstname.length >20){
                para.innerText = "*Name sholud be less than 20 characters" 
            }
            
            else if(props.data.lastname === ""){
                para1.innerText = "*Last Name is Required"
                lastname.style.backgroundColor ='rgb(255,160,122,0.3)' 
                lastname.style.border = '1px solid red'
            }

            else if(props.data.dob === ""){
                para2.innerText = "*Date of Birth is Required"
            }

            else if(props.data.email === ""){
                para3.innerText = "*Email is Required"
                email.style.backgroundColor ='rgb(255,160,122,0.3)' 
                email.style.border = '1px solid red'
                svg.style.opacity = '1'
            }
            else if(!props.data.email.includes('@')){
                para3.innerText = "*Invalid email"
            }
            else if(props.data.address === ""){
                para4.innerText = "*Address is Required"
                address.style.backgroundColor ='rgb(255,160,122,0.3)' 
                address.style.border = '1px solid red'
            }
            else if(props.data.address.length>40){
                para4.innerText = "*Address is should not exceed 50"
            }
            else {     
                 props.listener('increase')
            }
            }}>Next Step</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default SignUp