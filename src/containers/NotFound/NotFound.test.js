import React from 'react'
import { shallow } from 'enzyme'
import { NotFound } from '.'

describe('NotFound page', () => {
  it('Нормальный жизненный цикл и передача параметров', () => {
    const component = shallow(
      <NotFound/>
    )
    expect(component).toMatchSnapshot()
    component.unmount()
  })
})
