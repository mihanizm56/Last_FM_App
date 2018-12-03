import React from 'react'
import { shallow } from 'enzyme'
import { LogoBlock } from '.'

describe('LogoBlock', () => {
  it('Find component "logo-main-wrapper"', () => {
    expect(
      shallow(<LogoBlock />).find('div.logo-main-wrapper').length
    ).toBe(1)
  })

  it('Renders correct props', () => {
    let output = shallow(
      <LogoBlock />
    )

    expect(output).toMatchSnapshot()
  })
})
