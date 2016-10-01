import React from 'react';

export class Message extends React.Component {

    constructor(){
        super();
        this.state = {
            inputValue: ''
    },
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(e){
        this.setState({
            inputValue: e.target.value
        })
    };

    render() {
        return (
            <div>
                <input type="text"
                       value = {this.state.inputValue}
                       onChange = {this.handleChange}
                />
                <br/>
                <input type="text"
                       value = {this.state.inputValue}
                       onChange = {this.handleChange}
                />

            </div>
        )
    }
}