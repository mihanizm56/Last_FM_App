import React from 'react'
import { shallow } from 'enzyme'
import { Tracks } from '.'

describe('Tracks page', () => {
  it('Нормальный жизненный цикл и передача параметров', () => {
    const component = shallow(
      <Tracks/>
    )
    expect(component).toMatchSnapshot()
  })
})
