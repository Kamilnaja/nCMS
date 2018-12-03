import React from 'react';
import AddArticle from './addArticles/AddArticle';
import ManageAccountSettings from './manageAccountSettings/ManageAccountSettings';
import ManageArticles from './manageArticles/ManageArticles';
import ManageSettings from './manageSettings/ManageSettings';
import Paginator from './../paginator/Paginator';
import { PropTypes } from 'prop-types';

export const AdminPanelMain = (props) => {
    return (
        <section className="admin-panel-forms-wrapper">

            {props.isVisible === 'Edit settings' &&
                <ManageSettings />}

            {props.isVisible === 'Edit articles' &&
                <React.Fragment>
                    <ManageArticles />
                    <Paginator />
                </React.Fragment>}

            {props.isVisible === 'Add article' &&
                <AddArticle />}

            {props.isVisible === 'Edit account settings' &&
                <ManageAccountSettings />
            }
        </section>
    );
};

AdminPanelMain.propTypes = {
    isVisible: PropTypes.string
};