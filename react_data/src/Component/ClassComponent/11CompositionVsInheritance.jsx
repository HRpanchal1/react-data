import React, { Component } from 'react';

class CompositionVsInheritance extends Component {
    render() {
        return (
            <div>
                <DialogAnything title="<h1>Testing</h1>">
                    Lorem ipsum dolor <b> sit amet consectetur</b> adipisicing elit. Maxime distinctio autem at saepe ex ipsum vero quia quaerat itaque. Illum iure inventore ullam similique hic eveniet voluptatem sapiente quae nisi.
                </DialogAnything>
            </div>
        );
    }
}
function DialogAnything(props) {
    console.log(props);
    return <div style={{ border: "1px solid" }}>
        <h2>{props.title}</h2>
        <p>{props.children}</p>
    </div>
}
export default CompositionVsInheritance;