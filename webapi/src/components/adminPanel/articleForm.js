import React, { Component } from 'react';
class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                        <input type="text" />
                    </div>
                    <input className="btn" type="submit" value="zapisz" />
                </form>
            </div>
        )
    }
}

export default ArticleForm;