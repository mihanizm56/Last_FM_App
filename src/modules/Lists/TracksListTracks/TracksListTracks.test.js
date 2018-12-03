import React from 'react'
import { shallow } from 'enzyme'
import { TracksListTracks } from '.'

describe('TracksListTracks тесты', () => {
	it('Нормальный жизненный цикл', () => {
		const component = shallow(
    	<TracksListTracks/>
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
    	<TracksListTracks
    		list={list}
    	/>
    )
    expect(component).toMatchSnapshot()
	})

})