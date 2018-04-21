import React, { Component } from 'react';
function getSelectedText() {
    return window.getSelection().toString();
}

class NEditor extends Component {
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

    handleChange(e) {
        this.setState({
            currentText: e.target.value,
            textLength: this.state.currentText.length
        })
    }

    handleBold(start, end) {

    }
    render() {
        return (
            <div className="n-editor">
                <div className="btn-wrap">
                    <button>B</button>
                    <button>I</button>
                    <button>U</button>
                </div>

                <textarea
                    onChange={this.handleChange.bind(this)}
                    value={this.state.currentText}
                    onSelect={this.handleSelect.bind(this)}
                >
                </textarea>
                <div className="info-small">{this.state.textLength}</div>
            </div>
        )
    }
}

export default NEditor;