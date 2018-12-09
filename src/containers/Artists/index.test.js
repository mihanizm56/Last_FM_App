import React from "react"
import { shallow } from "enzyme"
import { Artists } from "."

describe("Artists", () => {
  it("Renders correct props", () => {
    let component = shallow(<Artists />)

    expect(component).toMatchSnapshot()
  })
})
