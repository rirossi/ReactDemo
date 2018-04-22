
import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import './index.css';
//import axios from 'axios';
// ========================================

class Title extends React.Component {
    render() {
        return (
            <b>LIST_OF_TPIDS_FOR_AIRBOOKING_US: </b>
        )
    }
}
/**
 * Your components tell React what you want to render –
 * React will efficiently update and render just the right components when your data changes.
 */
class Form extends React.Component {

    //A component takes in parameters, called props, and returns a hierarchy of views to display via the render method.
    constructor(props) {
        super(props);
        this.state = {
            tpid: "",
            result: "-",
        }

        this.handleResult = this.handleResult.bind(this);
        this.invokeEdge = this.invokeEdge.bind(this);
    }

    /**
     * Render method returns a description of what you want to render, and then React takes that description and renders it to the screen
     */
    render() {
        document.title = "Blawsome Admin UI";
        console.log("Rendering");
        //<input type="submit" class='button' value="I do nothing" onClick={this.handleClick}/>
        return (

            <div className="form">
                <form>
                    <Title />
                    <input type="text" onChange={this.invokeEdge} name="POS" value={this.state.tpid}/> <br/>


                    <br/><br/>
                    <b>Result: </b>
                    <input type="text" name="Result" value={this.state.result} className="testresult"/>
                </form>
            </div>
        );
    }

    handleResult(posList, pos) {
        if (pos === '') {
            this.setState({
                result: "-"
            });
        } else {
            console.log("Evaluating Result: " + posList + " for pos " + pos);
            let isUSBooking = posList.includes(pos)
            console.log("isUSBooking: " + isUSBooking);
            this.setState({
                result: isUSBooking
            });
        }

    }

    invokeEdge(evt) {
        const value = evt.target.value;
        const url = 'http://172.26.109.198:3000/api/rules/LIST_OF_TPIDS_FOR_AIRBOOKING_US'
        this.setState({tpid: value});

        fetch(url)
            .then(res => res.json()) // Transform the data into json
            .then(json => {
                //The let statement declares a block scope local variable, optionally initializing it to a value.
                let posList = json.airConfigurationList.airConfigurations[0].settingListType.configurations[0].value
                this.handleResult(posList, value)
            })
            .catch(console.log);
    }

    //is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here
    //componentDidMount() {
    //  console.log("Mount")
    //}

    handleClick(e) {
        e.preventDefault();
        console.log('Submit!!!');
    }
}

ReactDOM.render(
    <Form />,
    document.getElementById('root')
);
