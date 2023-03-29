import React, { Component } from 'react';

class APIExample extends Component {
    constructor(props) {
        super(props);
        this.state={
            FetchData : {}
        }
        // fetch("https://jsonplaceholder.typicode.com/todos").then(resp => { console.log(resp); }).then()
        fetch("https://jsonplaceholder.typicode.com/todos").then(resp => resp.json()).then((result)=>{
            this.setState({FetchData:result})
        })
    }
    
    render() {
        // console.log("this.state.FetchData",this.state.FetchData);
        return (
            <div>
                {JSON.stringify(this.state.FetchData)}
            </div>
        );
    }
}

export default APIExample;