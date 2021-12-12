import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button';

class Led extends Component {

    constructor(props) {
        super(props);
        this.state = { ledOn: false };
        }
    
        setLedState(state){
            this.setState({ ledOn: state !== '0' })
        }

        componentDidMount() {
            fetch('/led')
            .then(response => response.text())
            .then(state => this.setLedState(state));
        }
        
        handleStateChange(ledOn) {
        fetch('/led', { method: 'PUT', body: ledOn ? '0' : '1' })
        .then(response => response.text())
        .then(state => this.setLedState(state));
        }


    render() {
        return (
            <div>
                <ToggleButton
	             value={this.state.ledOn}
	             onToggle={value => this.handleStateChange(value)}
	           />
            </div>
        );
    }
}

export default Led;