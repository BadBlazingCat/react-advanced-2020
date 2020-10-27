import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexIncrease = () => {
    //this will delay what the current value is (asynchronous)
    setTimeout(() => {
      //setValue(value+1)},2000
      setValue((preValue) => {
        return preValue + 1;
      });
    }, 2000);
  };
  return(
    <>
      <section style={{margin:"4rem 0"}}>
        <h2 class="container">Regular Counter</h2>
        <h1 class="container">{value}</h1>
        <button class="btn" onClick={() => {setValue(value-1)}}> Decrease Value </button>
        <button class="btn" onClick={() => {setValue(value+1)}}> Increase Value </button>
        <button class="btn" onClick={() => {setValue(0)}}> Reset Value </button>
      </section>

      <section style={{margin:"4rem 0"}}>
        <h2 class="container">More Complex Counter</h2>
        <h1 class="container">{value}</h1>
        <button class="btn" onClick={() => {complexIncrease()}}> Increase Later </button>
      </section>
    </>
  );
};

export default UseStateCounter;
