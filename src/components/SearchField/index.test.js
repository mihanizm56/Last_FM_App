import React from 'react'
import { shallow, mount } from 'enzyme'

import { SearchField } from '.'

describe('SearchField test', () => {
  it('Нормальный жизненный цикл', () => {
    const component = shallow(
      <SearchField
        placeholder="lala"
        style={{ background: '#444' }}
        callback={() => 'callback'}
      />
    )
    expect(component).toMatchSnapshot()
    component.unmount()
  })
   it('Проверка onChange', () => {
   	const event = {
   		target: {
   			value: `jjkj`
   		}
   	}
    const component = shallow(
      <SearchField
        placeholder="lala"
        style={{ background: '#444' }}
        callback={() => 'callback'}
      />
    )
    component.simulate('change', event);
  })
  it('Нет Xss уязвимостей', () => {
   	const event = {
   		target: {
   			value: `<script> alert(1) </script>`
   		}
   	}
    let component = mount(
      <SearchField
        placeholder="lala"
        style={{ background: '#444' }}
        callback={(elem) => elem}
      />
    )
    expect(component.find('input').props().onChange(event)).not.toEqual(event.target.value)
  })
})
// enzyme что-то шутил с  simulate и ничего не умеет очень веселый и бесполезный