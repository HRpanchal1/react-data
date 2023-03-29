import React, { useCallback } from 'react';

const UseCallBackExample = () => {
    const clickHandler = useCallback(() => {
        // handle the click event
        console.log("called");
        fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((response) => {
            console.log(response);
        })
    });
    
    // const clickHandler = () => {
    //     // handle the click event
    //     console.log("called clickHandler simple without hook");
    //     fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((response) => {
    //         console.log(response);
    //     })
    // };
    const ButtonWrapper = (({ ClickHandlerCallBkFunc }) => {
        console.log("onClick");
        return <button onClick={ClickHandlerCallBkFunc}>Click me</button>
    })
    return (
        <div>
             <ButtonWrapper ClickHandlerCallBkFunc={clickHandler} />
            <p> The array of dependencies is not passed as arguments to the callback. Conceptually, though, that's what they represent: every value referenced inside the callback should also appear in the dependencies array. In the future, a sufficiently advanced compiler could create this array automatically.</p>

            <p> We recommend using the exhaustive-deps rule as part of our eslint-plugin-react-hooks package. It warns when dependencies are specified incorrectly and suggests a fix.</p>

        </div>
    );
};

export default UseCallBackExample;




// import React, { useState, useCallback } from 'react'
// var funccount = new Set();
// const App = () => {


// const [count, setCount] = useState(0)
// const [number, setNumber] = useState(0)

// const incrementCounter = useCallback(() => {
// setCount(count + 1)
// }, [count])
// const decrementCounter = useCallback(() => {
// setCount(count - 1)
// }, [count])
// const incrementNumber = useCallback(() => {
// setNumber(number + 1)
// }, [number])

// funccount.add(incrementCounter);
// funccount.add(decrementCounter);
// funccount.add(incrementNumber);
// console.log(funccount.size);

// return (
// 	<div>
// 	Count: {count}
// 	<button onClick={incrementCounter}>
// 		Increase counter
// 	</button>
// 	<button onClick={decrementCounter}>
// 		Decrease Counter
// 	</button>
// 	<button onClick={incrementNumber}>
// 		increase number
// 	</button>
// 	</div>
// )
// }


// export default App;



// import React, { useState, useCallback } from 'react'
// const funccount = new Set();
// const App = () => {


// const [count, setCount] = useState(0)
// const [number, setNumber] = useState(0)

// const incrementCounter = () => {
// 	setCount(count + 1)
// }
// const decrementCounter = () => {
// 	setCount(count - 1)
// }

// const incrementNumber = () => {
// 	setNumber(number + 1)
// }

// funccount.add(incrementCounter);
// funccount.add(decrementCounter);
// funccount.add(incrementNumber);
// console.log(funccount.size);

// return (
// 	<div>
// 	Count: {count}
// 	<button onClick={incrementCounter}>
// 		Increase counter
// 	</button>
// 	<button onClick={decrementCounter}>
// 		Decrease Counter
// 	</button>
// 	<button onClick={incrementNumber}>
// 		increase number
// 	</button>
// 	</div>
// )
// }


// export default App;

// import React from 'react';

// const UseCallBackExample = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default UseCallBackExample;