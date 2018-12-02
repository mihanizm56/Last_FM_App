import React from 'react'
import { shallow } from 'enzyme'
import { ButtonPlusMinus } from '.'

describe('SearchField', () => {
  it('Normal lifecycle', () => {
    expect(
      shallow(<ButtonPlusMinus parameter="minus" />).find(
        'img.button-volume-minus'
      ).length
    ).toBe(1)
  })

  it('Normal click', () => {
    let _click = jest.fn()

    shallow(<ButtonPlusMinus callback={_click} />)
      .find('img.button-volume-plus')
      .simulate('click')

    expect(_click).toBeCalled()
  })
})
