import React from 'react';
import {SmallImage} from './index';
import renderer from 'react-test-renderer';

test('smallimage test', () => {
    let component = renderer.create(
        <SmallImage image = "string"></SmallImage>,
    );
    let title = component.toJSON();
    expect(title).toMatchSnapshot();
});