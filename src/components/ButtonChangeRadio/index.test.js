import React from "react"
import { shallow, mount } from "enzyme"
import { ButtonChangeRadio } from "./index"

describe("ButtonChangeRadio render", () => {
  it("should render correctly without parameters", () => {
    const component = shallow(<ButtonChangeRadio />)

    expect(component).toMatchSnapshot()
  })
  it("should render correctly forward", () => {
    const component = shallow(<ButtonChangeRadio parameter="forward" />)

    expect(component).toMatchSnapshot()
  })
  it("should render correctly backward", () => {
    const component = shallow(<ButtonChangeRadio parameter="backward" />)

    expect(component).toMatchSnapshot()
  })
})

describe("Клики по 'впёрёд' и 'назад'", () => {
  let _click = jest.fn()

  it("Клик по 'плюс' без передачи значения", () => {
    const component = mount(
      <ButtonChangeRadio parameter="forward" callback={_click} />
    )

    component.find("img").simulate("click")
    expect(_click).toBeCalled()
  })

  it("Клик по 'минус' без передачи значения", () => {
    const component = mount(
      <ButtonChangeRadio parameter="backward" callback={_click} />
    )

    component.find("img").simulate("click")
    expect(_click).toBeCalled()
  })

  it("Клик по 'плюс' с передачей значения", () => {
    const component = mount(
      <ButtonChangeRadio
        parameter="forward"
        callback={_click.mockReturnValue(10)}
      />
    )

    component.find("img").simulate("click")
    expect(_click()).toBe(10)
  })

  it("Клик по 'минус' без передачи значения", () => {
    const component = mount(
      <ButtonChangeRadio
        parameter="backward"
        callback={_click.mockReturnValue(20)}
      />
    )

    component.find("img").simulate("click")
    expect(_click()).toBe(20)
  })
})
