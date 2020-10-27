import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    if (value > 0){
      document.title = "New messages(" + value + ")";
    }
  }, [value]);

  //the list up above is a dependancy list and useEffect will be valled every time elements within that list change as well as the intial render
  console.log("render component");
  return (
    <>
      <h2 class="container">{value}</h2>
      <button className="btn" onClick={()=> {setValue(value+1)}}> Increase Value</button>
    </>

  );
};

export default UseEffectBasics;
