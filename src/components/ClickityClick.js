// Code ClickityClick Component Here

import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
        super();

        // Define the initial state:

        this.state = {
            hasBeenClicked: false
        };
    }
//State changes, however instant they might appear, happen asynchronously. If we want to access our new state after it has been updated, we can optionally add a callback as a second argument to the this.setState() function. This callback will fire once the state has been updated, ensuring that this.state is now the new, shiny updated state.

    handleClick = () => {
        this.setState({
        hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked)) // prints true
    }

    render() {
        return (
            <div>
                <p> I have {this.state.hasBeenClicked ? null : 'not'} been clicked! </p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default ClickityClick