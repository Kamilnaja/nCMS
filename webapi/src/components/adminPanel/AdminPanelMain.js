import React from 'react';
import AddArticle from './addArticles/AddArticle';
import ManageArticles from './manageArticles/ManageArticles';
import ManagePages from './managePages/ManagePages';
import ManageSettings from './manageSettings/ManageSettings';
import ManageUsers from './manageUsers/ManageUsers';

export const AdminPanelMain = (props) => {
    return (
        <section className="admin-panel-forms-wrapper">

            {props.isVisible === 'Edit settings' &&
                <ManageSettings></ManageSettings>}

            {props.isVisible === 'Edit articles' &&
                <ManageArticles></ManageArticles>}

            {props.isVisible === 'Add article' &&
                <AddArticle></AddArticle>}

            {props.isVisible === 'Pages' &&
                <ManagePages></ManagePages>}

            {props.isVisible === 'Users' &&
                <ManageUsers></ManageUsers>
            }
        </section>
    )
}