import React from 'react'
import { shallow, mount } from 'enzyme'

import { LinkItem } from '.'

describe('LinkItem test', () => {
  it('Нормальный жизненный цикл', () => {
    const component = shallow(
      <LinkItem
      />
    )
    expect(component).toMatchSnapshot()
    component.unmount()
  })
  it('Нормальный ввод', () => {
    const component = shallow(
      <LinkItem
        name='sad'
        path="\x\0\0\0\n\n"
      />
    )
    expect(component).toMatchSnapshot()
  })
})