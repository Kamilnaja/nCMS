import React, { Component } from 'react';
export default class ChangeTitle extends Component {
    render() {
        return (
            <div>
                <p>Change Title of website</p>
                <form>
                    <label>Please enter title</label>
                    <input type="text"></input>
                    <input type="submit" value="save"></input>
                </form>
            </div>
        )
    }
}