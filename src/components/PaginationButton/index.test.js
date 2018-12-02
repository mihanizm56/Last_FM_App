import React from 'react'
import { shallow, mount } from 'enzyme'

import { PaginationButton } from '.'

describe('PaginationButton test', () => {
  it('Нормальный жизненный цикл', () => {
    const component = shallow(
      <PaginationButton
      />
    )
    expect(component).toMatchSnapshot()
    component.unmount()
  })
   it('Проверка данных функции обратного вызова', () => {
    const num = '3';
    let result;
    const component = mount(
      <PaginationButton
        number={num}
        callback={n => result = n}
      />
    )
    component.simulate('click');
    expect(num).toEqual(result[0])
  })
})