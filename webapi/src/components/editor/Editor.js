import React, { Component } from 'react';

class Editor extends Component {

    render() {
        return (
            <div className="n-editor">
                <textarea
                    onChange={this.props.handleChange}
                    value={this.props.currentText}
                    name={this.props.name}
                >
                </textarea>
                <div className="info-small">
                    {this.props.textLength}
                </div>
            </div>
        )
    }
}

export default Editor;