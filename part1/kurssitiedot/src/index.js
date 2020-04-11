import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }     
  return (
    <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
    console.log("Headerin propsit: ", props)
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

const Content = (props) => {
    console.log("Contentin propsit: ", props) 
    return (
        <div>
            <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
            <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
            <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>          
        </div>
    )
}

const Part = (props) => {
    console.log("Partsin propsit: ", props)   
    return (
        <div>
            <p>{props.part} {props.exercise}</p>
        </div>
    )
}

const Total = (props) => {
    console.log("Totalin propsit: ", props)   
    return (
        <div>
            <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises
            + props.parts[2].exercises}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
