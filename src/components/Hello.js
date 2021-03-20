import React from 'react'

const Hello = ()=>{
    return (
        React.createElement('dev',{id:'hello'}, 
        React.createElement('h1',null,'Hello I\'m Vijay!!')))
}

export default Hello;