import React from 'react'
import {shallow} from 'enzyme'
import {PlayButton} from './index'

const props = {
    callback: function() {
        alert("callback")
    },
    isPlaying: true
}

describe('PlayButton', () => {
    it('should render correctly', () => {
        const component = shallow(<PlayButton
            {...props}
        />);

        expect(component).toMatchSnapshot();
    });
});