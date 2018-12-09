import React from "react"
import { shallow } from "enzyme"
import { FilterGenres } from "./index"

describe("FilterGenres", () => {
  it("should render correctly", () => {
    const component = shallow(<FilterGenres listOfGenres={["pop", "rock"]} />)

    expect(component).toMatchSnapshot()
  })

  it("should render correctly", () => {
    const component = shallow(<FilterGenres tagIsSelected={true} />)

    expect(component).toMatchSnapshot()
  })

  it("should render correctly", () => {
    const component = shallow(
      <FilterGenres tagIsSelected={true} nameOfTag="smth" />
    )

    expect(component).toMatchSnapshot()
  })

  it("should render correctly", () => {
    const component = shallow(
      <FilterGenres
        listOfGenres={["pop", "rock"]}
        tagIsSelected={true}
        nameOfTag="smth"
      />
    )

    expect(component).toMatchSnapshot()
  })

  it("should render correctly", () => {
    const component = shallow(
      <FilterGenres
        listOfGenres={["rap", "pop"]}
        tagIsSelected={false}
        nameOfTag="smth"
      />
    )

    expect(component).toMatchSnapshot()
  })
})

describe("Выбор select", () => {
  //let mockFunc = jest.fn()

  it("Тест значений select", () => {
    const component = shallow(
      <FilterGenres tagIsSelected={true} nameOfTag="Test_value" />
    )

    expect(component.props().value).toBe("Test_value")
  })

  it("Тест значений default select", () => {
    const component = shallow(<FilterGenres tagIsSelected={false} />)

    expect(component.props().value).toBe("")
  })
})
