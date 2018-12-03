import React from 'react'
import { shallow } from 'enzyme'
import { ButtonPlusMinus } from '.'

describe('ButtonPlusMinus', () => {
  it('Normal lifecycle minus', () => {
    expect(
      shallow(<ButtonPlusMinus parameter="minus" />).find(
        'img.button-volume-minus'
      ).length
    ).toBe(1)
  })

  it('Normal lifecycle plus', () => {
    expect(
      shallow(<ButtonPlusMinus parameter="plus" />).find(
        'img.button-volume-plus'
      ).length
    ).toBe(1)
  })

  it('Normal click plus', () => {
    let _click = jest.fn()

    shallow(<ButtonPlusMinus callback={_click} parameter="plus" />)
      .find('img.button-volume-plus')
      .simulate('click')

    expect(_click).toBeCalled()
  })

  it('Normal click minus', () => {
    let _click = jest.fn()

    shallow(<ButtonPlusMinus callback={_click} parameter="minus" />)
      .find('img.button-volume-minus')
      .simulate('click')

    expect(_click).toBeCalled()
  })

  it('Renders correct props', () => {
    let output = shallow(
      <ButtonPlusMinus parameter="plus" callback={() => {}} />
    )

    expect(output).toMatchSnapshot()
  })
})
