import React from 'react'
import { shallow } from 'enzyme'
import  App from '.'

describe('App ', () => {
  it('Нормальный жизненный цикл и передача параметров', () => {
    let component = shallow(
      <App />
    )
    expect(component).toMatchSnapshot()
  })
})
