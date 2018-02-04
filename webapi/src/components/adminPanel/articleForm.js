import React, { Component } from 'react';
class articleForm extends Component {
    state = {
        title: this.props.article ? this.props.article.title : '',
        errors: {},
        loading: false
    }

    handleChange = (e) => {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }
    render() {
        return (
            <div className="form-wrapper">
                <form>
                    <h2 className="form-title">
                        Dodaj nowy artykuł
                    </h2>
                    <div className="input-wrap">
                        <label>Tytuł artykułu</label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.title}
                            name="title"
                            id="title"
                        />

                    </div>
                    <input className="btn" type="submit" value="zapisz" />
                </form>
            </div>
        )
    }
}

export default articleForm;