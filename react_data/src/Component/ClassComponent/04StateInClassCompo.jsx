import React, { Component } from 'react';

class StateInClassCompo extends Component {
    dataMember = "Something Data Member..."
    constructor(props) {
        super(props);
        this.state={
            stateData:"init",
            valueForIncreDec:0,
            trunonoff:true
        }
        // this.clickHandleSomething = this.clickHandleSomething.bind(this)
    }
    
    // clickHandleSomething(){
    //     console.log("called");
    //     this.dataMember = "Change..."
    //     this.setState({ stateData:"other data" })
    // }
    clickHandleSomething=()=>{
        console.log("called");
        this.dataMember = "Change..."
        this.setState({ stateData:"other data" })
    }
    increment = ()=>{
        this.setState({ valueForIncreDec:this.state.valueForIncreDec+1})
    }
    render() {
        let data = "Something..."
        return (
            <>
                {data} <br />
                {this.dataMember} <br />
                {this.state.stateData}
                {/* <button onClick={clickHandleSomething}>Click</button> */}
                {/* <button onClick={this.clickHandleSomething()}>Click</button> */}
                <button onClick={this.clickHandleSomething}>Click</button>
                <br />
                <button onClick={this.increment} >Incrememnt</button>
                {this.state.valueForIncreDec}
                <button onClick={()=>{this.setState({ valueForIncreDec:this.state.valueForIncreDec-1})}}>Decrement</button>
                <br />
                <br />
                <br />
                <button onClick={()=>{this.setState({ trunonoff:!this.state.trunonoff})}}>{this.state.trunonoff? "On":"Off" }</button>
                <br />
                <br />
                <br />
            </>
        );
    }
}

export default StateInClassCompo;