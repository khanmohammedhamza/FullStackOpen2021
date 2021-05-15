import React from 'react'


const App = () => {
  const course = 'Half Stack application development'
  console.log(course)
  const parts= [
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
<p>{course}</p>
<p>
parts.forEach((name,exercises)=> {
  
});
</p>

    
    </div>
  )
}
export default App

