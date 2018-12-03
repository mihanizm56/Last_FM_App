import React from 'react'
import { shallow } from 'enzyme'
import { Tracks } from '.'

describe('Tracks page', () => {
  it('Нормальный жизненный цикл и передача параметров 1 ветки', () => {
    const component = shallow(
      <Tracks/>
    )
    expect(component.props().match).toBeFalsy()
    expect(component.searchWord).toBeFalsy()
    component.unmount()
    expect(component).toMatchSnapshot()
  })
})
