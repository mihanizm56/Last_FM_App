import React from 'react';
import {TitleH2} from './index';
import renderer from 'react-test-renderer';

test('titleh2 test', () => {
    let component = renderer.create(
        <TitleH2></TitleH2>,
    );
    let title = component.toJSON();
    expect(title).toMatchSnapshot();


    component = renderer.create(
        <TitleH2 name="ssdsd"></TitleH2>,
    );
    title = component.toJSON();
    expect(title).toMatchSnapshot();
});