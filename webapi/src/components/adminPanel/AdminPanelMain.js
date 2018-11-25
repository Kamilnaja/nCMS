import React from 'react';
import AddArticle from './addArticles/AddArticle';
import ManageAccountSettings from './manageAccountSettings/ManageAccountSettings';
import ManageArticles from './manageArticles/ManageArticles';
import ManageSettings from './manageSettings/ManageSettings';

export const AdminPanelMain = (props) => {
    return (
        <section className="admin-panel-forms-wrapper">

            {props.isVisible === 'Edit settings' &&
                <ManageSettings />}

            {props.isVisible === 'Edit articles' &&
                <ManageArticles />}

            {props.isVisible === 'Add article' &&
                <AddArticle />}

            {props.isVisible === 'Edit account settings' &&
                <ManageAccountSettings />
            }
        </section>
    )
}