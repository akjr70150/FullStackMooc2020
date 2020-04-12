import React from 'react'
import Part from './Part'

const Content = ({ courses,parts }) => {
    console.log('Kontentti: ',parts)
    return (
        <div>
           {parts.map(part => <Part key={part.id} part={part} />)}
        </div>
    )
}

export default Content