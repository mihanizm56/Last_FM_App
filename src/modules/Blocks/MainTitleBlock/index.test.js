import React from 'react'
import { shallow } from 'enzyme'
import { MainTitleBlock } from '.'

describe('MainTitleBlock', () => {
  it('Find component "div"', () => {
    expect(
      shallow(<MainTitleBlock />).find('div.main-title-block').length
    ).toBe(1)
  })

  it('Renders correct props', () => {
    let output = shallow(
      <MainTitleBlock
        name="test-name"
        path="/test-path"
        linkName="test-link-name"
      />
    )

    expect(output).toMatchSnapshot()
  })
})
