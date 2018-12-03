import React from 'react'
import { shallow } from 'enzyme'
import { Paragraph } from '.'

describe('Paragraph', () => {
  it('Renders correct props', () => {
    let output = shallow(
    <Paragraph name="test" />)
    .html()

    expect(output).toMatchSnapshot()
  })
})
