import React from 'react'
import {shallow} from 'enzyme'
import {ButtonChangeRadio} from './index'

const props = {
    callback: function() {
        alert("callback")
    },
    image: "",
    parameter: "forward",
}

describe('ButtonChangeRadio', () => {
    it('should render correctly', () => {
        const component = shallow(<ButtonChangeRadio
            {...props}
        />);

        expect(component).toMatchSnapshot();
    });
});