import React from 'react';
import {
    deleteArticle,
    showEditionForm,
} from '../../../actions/articlesActions';

const ReturnButtons = (props) => {
    return (
        <div className="edit-options">
            <i onClick={(itemId) => showEditionForm(props.item._id)}>
                Edytuj
            </i>
            <i onClick={(itemId) => deleteArticle(props.item._id)}>
                Usuń
            </i>
        </div>
    )
}

export default ReturnButtons;
