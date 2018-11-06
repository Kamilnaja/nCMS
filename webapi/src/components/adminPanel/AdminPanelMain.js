import React from 'react';
import ChangeSettings from './siteSettings/ChangeSettings';
import ManageArticles from './manageArticles/ManageArticles';
import AddArticle from './AddArticles/AddArticle';
import ManagePages from './managePages/ManagePages';
import ManageUsers from './manageUsers/ManageUsers';

export const AdminPanelMain = (props) => {
    return (
        <section className="admin-panel-forms-wrapper">

            {props.isVisible === 'Edit settings' && <ChangeSettings></ChangeSettings>}

            {props.isVisible === 'Edit articles' && <ManageArticles></ManageArticles>}

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