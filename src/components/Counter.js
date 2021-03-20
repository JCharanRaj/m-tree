import React, { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state ={
            count : 0 
        } 
    }
    increment(){
        this.setState(prevState =>({
            count: prevState.count +1
        }),() => {console.log(this.state.count)})
        console.log(this.state.count)
    }

    incrementOne(){
        this.setState({
            count: this.state.count +1
        },() => {console.log(this.state.count)})
        console.log(this.state.count)
    }

    decrement(){
        this.setState({
            count:(this.state.count===0) ? 0:this.state.count -1
        })
        
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
render(){
    return (<dev>
        <h1>Count - {this.state.count}</h1> 
        <button className='button' onClick={()=>this.incrementFive()}>Increment</button>
        <button className='button'  onClick={()=>this.decrement()}>Decrement</button>
    </dev>)
}
}

export default Counter;