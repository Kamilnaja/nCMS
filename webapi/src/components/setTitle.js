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
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="form-title">Zmień tytuł</h2>
                    <div>
                        <label>Nowy tytuł</label>
                        <div>
                            <input value={this.state.inputValue} onChange={e => this.updateInputValue(e)}></input><br />
                            <input type="submit" value="change" className="btn"></input>
                        </div>
                    </div>
                </form>
            </div>

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