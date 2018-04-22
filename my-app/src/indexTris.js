import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square2 extends React.Component {
    //const index = this.props.value

    /**
     * React components can have state by setting this.state in the constructor, which should be considered private to the component.
     * Let’s store the current value of the square in state, and change it when the square is clicked.
     */
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    setX() { this.setState({value: 'X'}) }

    render() {
        //{this.props.value} is the value passed in as an argument
        return (
            <button className="square" onClick={() => this.setX()}>
                {this.state.value}
            </button>
        );
    }
}
//class Square extends React.Component {
//    render() {
//        return (
//            <button className="square" onClick={() => this.props.onClick()}>
//                {this.props.value}
//            </button>
//        );
//    }
//}
//Is the same as -- react component vs functional component
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }
    //Function
    renderSquare(i) {
        //return <Square value={i} />;
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    handleClick(i) {
        //.slice() copy the squares array instead of mutating the existing array. State attribues are immutable
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext?'X':'O';

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext});
        calculateWinner(this.state.squares)
    }

    onSubmit(e) {
        e.preventDefault();
        var title = this.title;
        console.log(title);
    }

    render() {
        const winner = calculateWinner(this.state.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
    );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
            </div>
    );
    }
}


class ShoppingList extends React.Component {
    /**
     * The render method returns a description of what you want to render, and then React takes that description and renders it to the screen.
     * In particular, render returns a React
     */
    render() {
        return (

            <div className="shopping-list">

                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
                <br/>
                <Game />
            </div>
        );
    }

    /**
     * Equivalent to
     React.createElement(
        "div",
        { className: "shopping-list" },
        React.createElement(
            "h1",
            null,
            "Shopping List for ",
            props.name),
        React.createElement(
            "ul",
            null,
            React.createElement(
                "li",
                null,
                "Instagram"),
            React.createElement(
                "li",
                null,
                "WhatsApp"),
            React.createElement(
                "li",
                null,
                "Oculus")
        )
     );


     Simplified
     return React.createElement(
        'div', {className: 'shopping-list'},
        React.createElement('h1', ...),
        React.createElement('ul', ...)
     );
     */
}

// ========================================

ReactDOM.render(
    //<ShoppingList name="Mark" />,
    //<ShoppingList name="Riccardo"/>,
    <Game />,
    document.getElementById('root')
);

//function send(){
//    var myVar = {"id" : 1};
//    console.log("tuleb siia", document.getElementById('saada').value);
//    fetch("http://localhost:3000", {
//        method: "POST",
//        headers: {
//            "Access-Control-Allow-Origin": "*",
//            "Content-Type": "text/plain"
//        },//"mode" : "no-cors",
//        body: JSON.stringify(myVar)
//        //body: {"id" : document.getElementById('saada').value}
//    }).then(function(muutuja){
//
//        document.getElementById('väljund').innerHTML = JSON.stringify(muutuja);
//    });
//}

