import React, { useDebugValue } from 'react'
const Header= (props) => {
    return(
    <h1> 
        {props.course}
      </h1>
  )
}
const Parts= (props) =>
{
  return(
    <div> 
    {props.name} {props.exercises}
    </div>
  )
} 
const Total= (props) =>
{
  return(
    <div>
      {props.parts.map(x =><Parts exercises={x.exercises}/>  )}
    </div>
  )
}
const Content= (props) =>
{
  console.log( props.parts)
 return(

   <div>
  {props.parts.map(value => <Parts name ={ value.name}  exercises ={value.exercises}key = {value.name} /> )}
   </div>
 )
 }
 
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


return (
  <div>
    <Header course={course} />
    <Content parts ={parts}/>
    <Total parts ={parts}/>
    
   
  </div>
)
} 
export default App

