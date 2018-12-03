import React from 'react';
import { shallow } from 'enzyme';
import ManageArticles from './../components/adminPanel/manageArticles/ManageArticles';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Edit Article should render', () => {
    it('should render', () => {
        expect(
            shallow(
                <Provider store={store}><ManageArticles /></Provider>
            ).exists()).toBe(true);
    });
})