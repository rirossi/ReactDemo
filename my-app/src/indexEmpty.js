
import ReactDOM from 'react-dom';
import React, { Component } from 'react'

class Form extends Component {
    render() {
        document.title = "Hello World";
        return (

            <div>
                Hello World
            </div>
        );
    }
}

ReactDOM.render(
    <Form />,
    document.getElementById('root')
);
