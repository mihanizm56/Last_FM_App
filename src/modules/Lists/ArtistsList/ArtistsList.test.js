import React from 'react'
import { shallow } from 'enzyme'
import { ArtistsList } from '.'

describe('ArtistsList тесты', () => {
	it('Нормальный жизненный цикл', () => {
		const component = shallow(
    	<ArtistsList/>
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
    	<ArtistsList
    		list={list}
    	/>
    )
    expect(component).toMatchSnapshot()
	})

})