import React from 'react'
import { shallow } from 'enzyme'
import { Album } from '.'

describe('Album page', () => {
  it('Нормальный жизненный цикл и передача параметров', () => {
    let component = shallow(
      <Album match={{ params:{album:'rer', artist:'df'}}}/>
    )
    expect(component).toMatchSnapshot()
  })
})
