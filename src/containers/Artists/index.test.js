import React from 'react'
import { shallow } from 'enzyme'
import { Artists } from '.'

describe('Artists', () => {
  it('Renders correct props', () => {
    let output = shallow(<Artists />)

    expect(output).toMatchSnapshot()
  })

  it('Renders correct length of Name', () => {
    let output = shallow(
      <Artists />
    )

    expect(output).toMatchSnapshot()
  })
})
