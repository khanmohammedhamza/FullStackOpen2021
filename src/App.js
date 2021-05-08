import React from 'react'

const Header= (props) => {
  console.log(props)
  return(
<h1> 
        {props.course}
      </h1>
  )
}
const Part = (props) =>{
  return(
    <>
     <p>{props.part} {props.exercise}</p>
    </>
  )
}
const Content= (props) => {
  return(
    <>
  <Part part = {props.part1} exercise = {props.exercise1} />
  <Part part = {props.part2} exercise = {props.exercise2} />
  <Part part = {props.part3} exercise = {props.exercise3} />
  </>
  )
}

const Total= (props) => {
 const exercises= props.exercises
 let sum = 0
 exercises.forEach(element => {
   sum += element
 });
  return(
    <p>
   number of exercises  {sum} 
   </p>
  )
}
const App = () => {
  const course  = 'Half Stack appliation development'
  const part1 = 'fundamentals of React'
  const exercise1 = 10
  const part2 ='Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3= 14
  
  return(
    <div>
      <Header course={course} />
      <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3}/>
    
     {/* <Total exercise1={exercise1 + exercise2 + exercise3} /> */}
     <Total exercises={[exercise1,  exercise2 , exercise3]} />
      
    </div>
  )
}
export default App

