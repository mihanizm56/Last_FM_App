import React from 'react'
import { shallow } from 'enzyme'
import { TracksListChart } from '.'

describe('TracksListChart тесты', () => {
	it('Нормальный жизненный цикл', () => {
		const component = shallow(
    	<TracksListChart/>
    )
    expect(component).toMatchSnapshot()
    component.unmount()
	})
	it('Передача параметров', () => {
		const list = [
			{
				name: '1',
				images:['1.png']
			},
			{
				name: '2',
				images:['2.png']
			}
		]
		const component = shallow(
    	<TracksListChart
    		list={list}
    	/>
    )
    expect(component).toMatchSnapshot()
	})

})