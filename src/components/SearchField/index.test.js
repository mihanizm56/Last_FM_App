import React from 'react'
import { shallow } from 'enzyme'

import  { SearchField }  from '.'

describe('SearchField', () => {
	it('Нормальный жизненный цикл', () => {
		const component = shallow(
			<SearchField placeholder='lala' 
						style={{background: '#444'}} 
						callback={ () => 'callback'}/>)
		expect(component).toMatchSnapshot()
		component.unmount()
	})
})