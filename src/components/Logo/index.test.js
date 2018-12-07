import React from 'react'
import { shallow } from 'enzyme'
import { Logo } from '.'

describe('Logo', () => {
  it('Renders correct props', () => {
    let output = shallow(<Logo />)

    expect(output).toMatchSnapshot()
  })
})
