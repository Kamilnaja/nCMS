import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from './../../actions/articlesActions';

class ChangeSettings extends Component {
    render() {
        return (
            <div>
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
            </div>

        )
    };
}

const mapStateToProps = (state) => {
    return {
        settings: state.settings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticles: (data) => {
            dispatch(getArticles(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSettings)