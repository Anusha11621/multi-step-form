import React, {useState} from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Message from './components/Message';
import Checkbox from './components/Checkbox';

function App() {
  let signupvalues = {
    firstname: '',
    lastname:'',
    dob:'',
    email:'',
    address:''
  }
  let messagevalues = {
    testarea: '',
    one:'',
    two:''
  }
  let [values,setValue] = useState(signupvalues)

  let handelChangefn = (e)=>{
      let val = e.target.id
      setValue((prevState)=>{
          prevState[val] = e.target.value
          return {
              ...prevState
          }
      })
  }

  let [msgvalues,setMessage] = useState(messagevalues)

  let msghandelChange = (event)=>{
    let keys = event.target.id
    setMessage((prevState)=>{
      prevState[keys] = event.target.value
      return {
          ...prevState
      }
  })
  }

  let [Forms,setForms] = useState(0)

  let buttnhandler = (operation)=>{
    if(operation === 'increase'){
      setForms((count)=>count+1)
    }
    else if(operation === 'decrease'){
      setForms((count)=>count-1)
    }
  }
  
  let pageDisplay = ()=>{
    if(Forms === 0){
      return <SignUp data = {values} listener = {buttnhandler} click = {handelChangefn}/>
    }
    else if(Forms === 1){
      return <Message val={msgvalues} listener = {buttnhandler} click = {msghandelChange}/>
    }
    else{
      return <Checkbox listener = {buttnhandler}/>
    }
  }
  
  return (
    < >
    <div>{pageDisplay()}</div> 
    </>
  );
}

export default App;
