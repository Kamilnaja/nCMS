import React from 'react';
import ChangeSettings from './siteSettings/changeSettings';
import ManageArticles from './manageArticles/manageArticles';
import AddArticle from './AddArticles/AddArticle';
import ManagePages from './managePages/managePages';
import ManageUsers from './manageUsers/manageUsers';

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