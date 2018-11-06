import React, { Component } from 'react';

function getSelectedText() {
    return window.getSelection().toString();
}

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentText: '',
            selectedPart: '',
            textLength: 0
        }
    }

    handleSelect(e) {
        //pobierz 1 i ostatni numer tego znaku w textarea
        console.log(
            getSelectedText()
        )
        window.getSelection();

        this.setState({
            selectedPart: getSelectedText(),
        })
    }
    // todo - funkcje do edycji tekstu, wstawiające tagi html
    render() {
        return (
            <div className="n-editor">
                <div className="btn-wrap">
                    <button>B</button>
                    <button>I</button>
                    <button>U</button>
                </div>

                <textarea
                    onChange={this.props.handleChange}
                    value={this.props.currentText}
                    // onSelect={this.handleSelect.bind(this)}
                    name={this.props.name}
                >
                </textarea>
                <div className="info-small">{this.state.textLength}</div>
            </div>
        )
    }
}

export default Editor;