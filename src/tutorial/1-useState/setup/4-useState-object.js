import React, { useState } from 'react';

const UseStateObject = () => {
  //could instead create a hook for each state individually
  const [person, setPerson] = useState({
    name: "peter",
    age:"age",
    message: "random message"
  });
  function changeMessage(){
    //this is a use of the spread operator
    setPerson({...person, message: "hello world"})
  }
  console.log(person);
  return(
    <>
      <h2 class="container">useState object example</h2>
      <h3 class="container">{person.name}</h3>
      <h3 class="container">{person.age}</h3>
      <h3 class="container">{person.message}</h3>
      <button className="btn" onClick={changeMessage}> Change message</button>
    </>
  )


};

export default UseStateObject;
