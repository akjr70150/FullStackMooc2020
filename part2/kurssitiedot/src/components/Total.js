import React from 'react'

const Total = ({ courses,parts }) => {
    const sum = parts.reduce((s, p) => {
        return s + p.exercises},0)
        console.log('Totalin määrä: ',sum)
        return (
            <p>
               <b> total of exercises {sum}</b>
            </p>
        )
}  

export default Total