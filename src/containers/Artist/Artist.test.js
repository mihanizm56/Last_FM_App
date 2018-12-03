import React from 'react'
import { shallow } from 'enzyme'
import { Artist } from '.'

describe('Artist page', () => {
  it('Renders correct props', () => {
    let component = shallow(<Artist match={{params:{name:'rer'}}} />)
    expect(component).toMatchSnapshot()
  })
})
