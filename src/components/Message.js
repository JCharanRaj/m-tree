import React, { Component } from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state ={
            message:'Welcome Visitor!!'
        }
    }
    changeMessage(){
        this.setState({
            message:"Thank you!!"
        })
    };
    render (){
        return (
        <dev><h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button></dev>)
    }
}

export default Message;