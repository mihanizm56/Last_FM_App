import React from "react"
import { shallow } from "enzyme"
import { FilterGenres } from "./index"

describe("FilterGenres", () => {
  it("should render correctly", () => {
    const component = shallow(<FilterGenres />)

    expect(component).toMatchSnapshot()
  })
})

describe("FilterGenres", () => {
  it("should render correctly", () => {
    const component = shallow(
      <FilterGenres
        callback={function() {
          alert("callback")
        }}
        listOfGenres={["pop", "rock"]}
        tagIsSelected={true}
        nameOfTag="smth"
      />
    )

    expect(component).toMatchSnapshot()
  })
})
