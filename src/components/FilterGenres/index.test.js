import React from 'react'
import {shallow} from 'enzyme'
import {FilterGenres} from './index'

const props = {
    callback: function() {
        alert("callback")
    },
    listOfGenres:["pop","rock"],
    tagIsSelected: true,
    nameOfTag: "smth"
}

describe('FilterGenres', () => {
    it('should render correctly', () => {
        const component = shallow(<FilterGenres
            {...props}
        />);

        expect(component).toMatchSnapshot();
    });
});