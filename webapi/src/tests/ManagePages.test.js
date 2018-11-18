import React from 'react';
import { shallow } from 'enzyme';
import ManagePages from '../components/adminPanel/managePages/ManagePages';

describe('ManagePages', () => {
    it('Manage Pages renders', () => {
        const wrapper = shallow(<ManagePages />)
        expect(wrapper.contains("Manage pages")).toEqual(true);
    })
})