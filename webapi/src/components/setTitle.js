import React, { Component } from 'react';
import axios from 'axios';

export default class setTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.updateInputValue = this.updateInputValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Zmień tytuł</h2>
                <div>
                    <label>Nowy tytuł</label>
                    <input value={this.state.inputValue} onChange={e => this.updateInputValue(e)}></input>
                    <input type="submit" value="change">
                    </input>
                </div>
            </form>
        )
    };

    handleSubmit(evt) {
        evt.preventDefault();
        // alert('data was sended' + this.state.inputValue)
        axios.put('http://localhost:8080/site_title', {
            title: this.state.inputValue
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }
}