import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import Main from './../components/Main';
import Articles from './../components/pagesParts/Articles';
import Paginator from './../components/paginator/Paginator';

describe('<App />', () => {
    it('should render', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find(Articles)).to.have.lengthOf(1);
        expect(wrapper.find(Paginator)).to.have.lengthOf(1);
    })
})
