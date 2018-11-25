import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Articles from './../components/pagesParts/Articles';

const mockStore = configureMockStore();
const store = mockStore({});

describe("Edit Article should render", () => {
    it("should render", () => {
        expect(
            shallow(
                <Provider store={store}><Articles /></Provider>
            ).exists()).toBe(true);
    });
})