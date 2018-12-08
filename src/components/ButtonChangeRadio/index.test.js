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

// describe.only("Клик по 'плюс' без передачи значения", () => {
//   let _click = jest.fn()

//   it("Клик по 'плюс' без передачи значения", () => {
//     const component = shallow(<ButtonChangeRadio parameter="forward" />)

//     component.find("img .button-radio--forward").simulate("click")

//     expect(_click).toBeCalled()
//   })
// })

describe("Клик по 'минус' без передачи значения", () => {
  //let _click = jest.fn()
  it("Клик по 'минус' без передачи значения", () => {
    const component = mount(<ButtonChangeRadio parameter="backward" />)

    expect(component.find("img.button-radio--backward")).toHaveLength(1)
  })
})

// describe("Клик по 'плюс' с передачей значения", () => {
//   let _click = jest.fn()
//   it("Клик по 'плюс' с передачей значения", () => {
//     const component = shallow(
//       <ButtonChangeRadio parameter="forward" callBack={_click} />
//     )

//     component.find("img .button-radio--forward").simulate("click")
//     expect(_click.mockReturnValue(10)()).toBe(10)
//   })
// })

// describe("Клик по 'минус' с передачей значения", () => {
//   let _click = jest.fn()
//   it("Клик по 'минус' без передачи значения", () => {
//     const component = shallow(
//       <ButtonChangeRadio parameter="backward" callBack={_click} />
//     )

//     component.find("img .button-radio--backward").simulate("click")
//     expect(_click.mockReturnValue(10)()).toBe(10)
//   })
// })
