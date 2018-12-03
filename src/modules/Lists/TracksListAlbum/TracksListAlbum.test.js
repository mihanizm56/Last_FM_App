import React from 'react'
import { shallow } from 'enzyme'
import { TracksListAlbum } from '.'

describe('TracksListAlbum тесты', () => {
	it('Нормальный жизненный цикл', () => {
	let component = shallow(
    	<TracksListAlbum/>
    )
    expect(component).toMatchSnapshot()
    component.unmount()
	})
	it('Передача параметров', () => {
		let list = [
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
    	<TracksListAlbum
    		list={list}
    	/>
    )
    expect(component).toMatchSnapshot()
	})

})