import React, { useDebugValue } from 'react'
const Header= (props) => {
    return(
    <h1> 
        {props.course}
      </h1>
  )
}
const Parts= (props) =>{
  console.log(props.exercises)
  return(
    <div> 
    {props.name} {props.exercises}
    </div>
  )
} 
 const Content = (props) =>
  {

   return (
     <div>
      {props.parts.map(value => <Parts name = {value.name} exercises = {value.exercises} key = {value.name}/> )}
     </div> 
   )
 }
  const Total= (props) => {
   console.log(Sum(props.parts))
     return ( 
<div>
    Total = {Sum(props.parts)}
</div>
     )
   
 } 
 const Sum = (parts) => {
   return(parts[0].exercises + parts[1].exercises + parts[2].exercises)} 
 const x = Sum



const App = () => {
  const course = 'Half Stack application development'
  
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  const [Just,To,Understand] = parts
   console.log(Just) 
   console.log(parts)
return (
  <div>
    <Header course={course} />
    <Content parts ={parts}/>
    <Total parts={parts} />
  </div>
  
)
} 
export default App

