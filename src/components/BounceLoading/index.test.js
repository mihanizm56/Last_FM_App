import React from 'react'
import { shallow } from 'enzyme'
import { BounceLoading } from '.'

describe('BounceLoading', () => {
  it('Renders correct props', () => {
    let output = shallow(<BounceLoading />).html()

    expect(output).toMatchSnapshot()
  })
})
