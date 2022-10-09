import React from "react";
import { Container, Box,  Typography, Input, Button, FormControl, Select, TextField, InputLabel, Grid } from '@material-ui/core'
import { useState, useRef } from "react";
import classes from './styles.module.css'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [input, setInput] = useState([])
 
  const inputName = useRef('');
  const lastName = inputName.current.value();

  // function getValue() {
  //   console.log(lastName)
  // }

 
  
  // const inputSurname = useRef();
  // const lastSurname = inputSurname.current.value();
  // const inputAge = useRef();
  // const lastAge = inputAge.current.value();
  // const inputStory = useRef();
  // const lastStory = inputStory.current.value();


  return (
    // <div container className={classes.container} justifyContent='center'>
    //   <form onSubmit={() => console.log('submited!')}  marginBottom='40pw'>
    //     <label htmlFor='name'>Incert Your name</label>
    //     <input id='name' placeholder="Your name" variant="outlined"/>
    //   </form>
    //   <form align='center' gutterBottom marginBottom='40pw'>
    //     <label htmlFor='surname'>Incert Your Surname</label>
    //     <input id='surname' placeholder="Your sername"  variant="outlined"/>
    //   </form>
    //   <form marginBottom='40pw'>
    //     <label htmlFor='age'>Incert Your age</label>
    //     <input id='age' placeholder="Your age" variant="outlined"/>
    //   </form>
    //   <form marginBottom='40pw'>
    //     <label htmlFor='story'>Your story</label>
    //     <textarea id='story' placeholder="Your story"  variant="outlined"/>
    //   </form>
    //   <Button onClick={() => getValue}>Submit</Button>
    // </div>

    <div className={classes.container} justifyContent='center'>
      <form>
        <ul>
          <li>
          <label htmlFor="name"></label>
          <input id='name' ref={() => lastName}></input>
          </li>
          <li>
          <label htmlFor="SurName"></label>
          <input id='Surname'></input>
          </li>
          <li>
          <label htmlFor="age"></label>
          <input id='age'></input>
          </li>
          <li>
            <label htmlFor="text"></label>
            <textarea id="text"></textarea>
          </li>
        </ul>
      </form>
      <button align='center'>Submit</button>
    </div>
  )
 
}

export default App;
