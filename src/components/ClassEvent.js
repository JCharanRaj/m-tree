import React, { Component } from "react"

class ClassEvent extends Component{
    constructor(props){
        super(props)
        this.state = {
            message : "Hello"
        }
    }
    clickHandler(){
        this.setState( {
            message:"Bye bye"
        })
        console.log(this)
    }
    render(){
        return(
            <dev>
                <dev>{this.state.message}</dev>
                <button onClick={this.clickHandler.bind(this)}>Click me</button>
                <button onClick={() =>this.clickHandler()}>Click me</button>
            </dev>
        )
    }
}
export default ClassEvent;