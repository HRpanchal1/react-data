import React, { Component } from 'react';

class SpreadVsRestCompo extends Component {
    getData=(a,...data)=>{
        console.log("getData",data);
        // console.log(data[0]);
    }
    getDataSpread=(a,b,c)=>{
        console.log(a,b,c);
    }
    render() {
        let arr = [12,45]; 
        return (
            <div>
                {this.getData(10,50,50,80,90,80)}
                {this.getDataSpread([10,50,90])}
                {/* {this.getDataSpread(arr)} */}
            </div>
        );
    }
}

export default SpreadVsRestCompo;