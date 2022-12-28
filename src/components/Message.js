import React from 'react'
import './message.css'

function Message(props) {
  return (
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
          <p className='bg-primary rounded p-2 pl-3 pr-3 text-light mr-2'>2</p>
          <p>Message</p>
        </div>
        <div className='d-flex m-3 align-items-center'>
          <p className='bg-light rounded p-2 pl-3 pr-3  mr-2'>3</p>
          <p>Checkbox</p>
        </div>
      </div>
      <hr></hr>
      <div className='signup'>
        <p>Step 2/3</p>
        <h3>Message</h3>
        <br></br>
        <div>
        <div>
          <p>Message</p>
          <textarea id='testarea' rows={'8'} value={props.val.testarea} onChange ={props.click}></textarea>
        </div>
        <p className='errmsg text-danger'></p>
        <div className='d-flex flex-wrap'>
         <div className='mr-5' >
         <input className='m-2' type={'radio'} id='one' name='check' value={props.val.one} onChange ={props.click}></input>
          <label htmlFor='one'>The number One Choice</label>
         </div>
         <div>
         <input className='m-2' id='two' type={'radio'} name='check'></input>
          <label htmlFor='two'>The number two Choice</label>

          <p className='radioerr text-danger'></p>
         </div>
        
        </div>
        </div>
      </div>
      <hr></hr>
      <div className='d-flex justify-content-end'>

        <button className='btn' onClick={()=>{return props.listener('decrease')}}>Back</button>
        <button className='btn btn-primary' 
        onClick={()=>{
          let errmsg = document.querySelector('.errmsg')
          let radioerr = document.querySelector('.radioerr')
          let one = document.querySelector('#one')
          let two = document.querySelector('#two')
          if(props.val.testarea === ""  ){
            errmsg.textContent = "*Message shouldn't be Empty"
          }
          else if(props.val.testarea.length < 20  ){
            errmsg.textContent = "*Message shouldn't be less than 20 characters "
          }
          else if(one.checked === false && two.checked === false){
            radioerr.textContent = "*select one"
          }
          else{
            return props.listener('increase')
          }
          
        }}
        >Next Step</button>

      </div>
    </div>
  </div>
    </div>
  )
}

export default Message