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
        <div className='d-flex flex-wrap m-5'>
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
        <div className='d-flex flex-column '>
        <div className='signup'>
          <p>Step3/3</p>
          <h3>Checkbox</h3>
          <br></br>
        </div>
        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          <div className='gender male'>
            <input id='checkbox1' type = "radio" name='gender' style={{display:'none'}}
            onClick={()=>{
              let checkbox1 =document.querySelector('#checkbox1')
              let male = document.querySelector('.male')
              let female = document.querySelector('.female')
            if(checkbox1.checked === true){
              male.style.border = '2px solid rgb(0,0,255,0.3)'
              male.style.backgroundColor = ' rgb(0,0,255,0.2)'
              female.style.border = '1px solid rgb(193, 192, 192)'
              female.style.backgroundColor = 'rgb(242, 241, 241)'
            }
            }}
            ></input>
            <label htmlFor='checkbox1' >
            <img  className='genderimage'alt='male' src='https://res.cloudinary.com/dbpcftrzu/image/upload/v1672205066/db68c39d7b021f24a67e06b154771ebc-removebg-preview_2_yjbjob.png'/>
            </label>
          </div>
          <div className='gender female'>
          <input id='checkbox2' type = "radio" name='gender' style={{display:'none'}}
          onClick={()=>{
            let checkbox2 =document.querySelector('#checkbox2')
            let female = document.querySelector('.female')
            let male = document.querySelector('.male')
          if(checkbox2.checked === true){
            female.style.border = '2px solid rgb(0,0,255,0.3)'
            female.style.backgroundColor = ' rgb(0,0,255,0.2)'
            male.style.border = '1px solid rgb(193, 192, 192)'
            male.style.backgroundColor = 'rgb(242, 241, 241)'
          }
         
          }}
          ></input>
            <label htmlFor='checkbox2' >
            <img className='genderimagegirl' alt='female' src='https://res.cloudinary.com/dbpcftrzu/image/upload/v1672204889/f108eba3bfb6dc43be861b3fd697eceb-removebg-preview_kskgqz.png'/>
            </label>
          </div>
        </div>
        <div>
          <div>
            <input type={'radio'} name = 'check'></input>
            <label>I want to add this option</label>
          </div>
          <div>
            <input type={'radio'} name = 'check'></input>
            <label>Let me click on this checkbox and choose some cool stuf</label>
          </div>
        </div>
        <hr></hr>
         
        <div className='d-flex justify-content-end'>
          <button className='btn ' onClick={()=>{return props.listener('decrease')}}>Back</button>
          <button className='btn btn-primary' onClick = {()=>{
            let checkbox2 =document.querySelector('#checkbox2')
            let female = document.querySelector('.female')
           
            
           if(checkbox2.checked === true){
              female.style.border = '2px solid rgb(0,0,255,0.3)'
              female.style.backgroundColor = ' rgb(0,0,255,0.2)'
            }
            else{

            }
            // alert('Form Submitted')
            
            // window.location.reload()
          }}>Submit</button>
        </div>
        </div>
      </div>
    </div>
    </div>
        
        
    </div>
  )
}

export default Checkbox