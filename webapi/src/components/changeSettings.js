import React, { Component } from 'react';
import axios from 'axios';

export default class changeSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            subtitleValue: ''
        }
        this.updateTitleValue = this.updateTitleValue.bind(this);
        this.updateSubtitleValue = this.updateSubtitleValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="form-title">Zmień tytuł</h2>
                    <div>
                        <div>
                            <div className="input-wrap">
                                <label>Nowy tytuł</label>
                                <input type="text" value={this.state.titleValue} onChange={e => this.updateTitleValue(e)} required />
                            </div>
                        </div>
                        <div>
                            <div className="input-wrap">
                                <label>Zmień podtytuł</label>
                                <input type="text" value={this.state.subtitleValue} onChange={e => this.updateSubtitleValue(e)} />
                            </div>
                        </div>
                        <input type="submit" value="change" className="btn" />
                    </div>
                </form>
            </div>
        )
    };

    handleSubmit(evt) {
        evt.preventDefault();
        if (this.state.titleValue.length) {
            axios.put('http://localhost:8080/api/settings', {
                title: this.state.titleValue,
                subtitle: this.state.subtitleValue
            })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err);
                })
            // todo - force update title 
        };
    }
    updateTitleValue(evt) {
        this.setState({
            titleValue: evt.target.value
        });
    }
    updateSubtitleValue(evt) {
        this.setState({
            subtitleValue: evt.target.value
        })
    }
}