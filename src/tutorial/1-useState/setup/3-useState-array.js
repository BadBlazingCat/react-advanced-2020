import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  function clearBtnClickHandler(){
    setPeople([]);
  }
  function removeBtnClickHandler(id){
    for (var i=0; i < people.length; i++){
      console.log(people[i].id)
      if (id == people[i].id){
        people.splice(i,1)
        //must use a new variable other than people
        let newPeople = Array.from(people);
        setPeople(newPeople)
        console.log(newPeople);
      }
    }
  }
  return (
    <>
      {people.map((person) => {
        const {id, name} = person;
        return(
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeBtnClickHandler(id)}> Remove Item</button>
          </div>
        )
      })}
      <button className="btn" onClick={clearBtnClickHandler}> Clear All Items </button>
    </>
  );
};

export default UseStateArray;
