import React, { Component } from 'react';

export default class ChangeSettings extends Component {
    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="form-title">Zmień tytuł</h2>
                    <div>
                        <div>
                            <div className="input-wrap">
                                <label>Nowy tytuł</label>
                                <input type="text" required />
                            </div>
                        </div>
                        <div>
                            <div className="input-wrap">
                                <label>Zmień podtytuł</label>
                                <input type="text" />
                            </div>
                        </div>
                        <input type="submit" value="change" className="btn" />
                    </div>
                </form>
            </div>
        )
    };
}
