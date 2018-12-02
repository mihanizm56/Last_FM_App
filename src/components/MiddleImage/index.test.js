import React from 'react'
import { shallow } from 'enzyme'

import { MiddleImage } from '.'

describe('MiddleImage test', () => {
  it('Нормальный жизненный цикл', () => {
    const component = shallow(
      <MiddleImage
      />
    )
    expect(component).toMatchSnapshot()
    component.unmount()
  })
  it('Нормальный ввод', () => {
    const component = shallow(
     <MiddleImage
      image={'http://...'}
      />
    )
    expect(component).toMatchSnapshot()
  })
})