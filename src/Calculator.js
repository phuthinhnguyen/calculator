import React from 'react';
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={input:{num1:0,num2:0},result:0}
    }
    handleChange(e){
        this.setState({input:{...this.state.input,[e.target.name]:e.target.value}})
    }
    add=(e)=>{
        e.preventDefault();
        this.setState({result:parseInt(this.state.input.num1)+parseInt(this.state.input.num2)})
    }
    subtract=(e)=>{
        e.preventDefault();
        this.setState({result:parseInt(this.state.input.num1)-parseInt(this.state.input.num2)})
    }
    multiply=(e)=>{
        e.preventDefault();
        this.setState({result:parseInt(this.state.input.num1)*parseInt(this.state.input.num2)})
    }
    divide=(e)=>{
        e.preventDefault();
        this.setState({result:parseInt(this.state.input.num1)/parseInt(this.state.input.num2)})
    }
    render(){
        return(
            <form>
                <input type='number' value={this.state.input.num1} name='num1' onChange={(e)=>this.handleChange(e)}></input>
                <input type='number' value={this.state.input.num2} name='num2' onChange={(e)=>this.handleChange(e)}></input>
                <h2>Result: {this.state.result}</h2>
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.multiply}>x</button>
                <button onClick={this.divide}>/</button>
            </form>
        )
    }
}
export default Calculator;