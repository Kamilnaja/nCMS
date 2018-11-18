import React from 'react';
import { shallow } from 'enzyme';
import ArticleFooter from './../components/articlesParts/ArticleFooter';

describe('ArticleFooter', () => {
    it('renders article footer', () => {
        const wrapper = shallow(<ArticleFooter />);
        expect(wrapper.stringContaining("Written by:"));
    })
})