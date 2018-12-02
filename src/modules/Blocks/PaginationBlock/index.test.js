import React from 'react'
import { shallow } from 'enzyme'
import { PaginationBlock } from '.'

describe('PaginationBlock', () => {
  it('Find component "div"', () => {
    expect(
      shallow(<PaginationBlock />).find('div.pagination-wrapper').length
    ).toBe(1)
  })

  it('Renders correct props', () => {
    let output = shallow(<PaginationBlock callbackForPagging={() => console.log("test-func")} />)

    expect(output).toMatchSnapshot()
  })
})
