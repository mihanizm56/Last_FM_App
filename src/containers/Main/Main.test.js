import React from 'react'
import { shallow } from 'enzyme'
import { Main } from '.'

describe('Main page', () => {
  it('Renders correct props', () => {
    let component = shallow(
      <Main />
    )
    expect(component).toMatchSnapshot()
    component.unmount()
    expect(component).toMatchSnapshot()
  })
})
