import React, { Component } from 'react';
export default class setTitle extends Component {
    render() {
        return (
            <div>
                <h2>Zmień tytuł</h2>
                <form>
                    <label>Nowy tytuł</label>
                    <input value={this.props.title}></input>
                    <button onClick={this.props.setTitle}>
                        Set new website title
                </button>
                </form>
            </div>
        )
    }
}