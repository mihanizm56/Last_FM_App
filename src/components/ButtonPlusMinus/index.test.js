import React from "react"
import { shallow } from "enzyme"
import { ButtonPlusMinus } from "."

describe("render ButtonPlusMinus", () => {
  it("Renders correct plus", () => {
    let output = shallow(<ButtonPlusMinus parameter="plus" />)

    expect(output).toMatchSnapshot()
  })
  it("Renders correct minus", () => {
    let output = shallow(<ButtonPlusMinus parameter="minus" />)

    expect(output).toMatchSnapshot()
  })
})

describe("Клики по 'плюс' и 'минус'", () => {
  let _click = jest.fn()

  it("Клик по 'плюс' с передачей значения", () => {
    const component = shallow(
      <ButtonPlusMinus parameter="plus" callback={_click.mockReturnValue(10)} />
    )

    component.find("img.button-volume-plus").simulate("click")
    expect(_click()).toBe(10)
  })

  it("Клик по 'минус' без передачи значения", () => {
    const component = shallow(
      <ButtonPlusMinus
        parameter="minus"
        callback={_click.mockReturnValue(20)}
      />
    )

    component.find("img.button-volume-minus").simulate("click")
    expect(_click()).toBe(20)
  })
})
