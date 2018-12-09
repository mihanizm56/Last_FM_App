import React from "react"
import { shallow } from "enzyme"
import { Album } from "."
import { TitleH2 } from "../../components/"
import { TracksListAlbum } from "../../modules/"

describe("Album page", () => {
  it("Нормальный жизненный цикл и передача параметров", () => {
    let component = shallow(
      <Album match={{ params: { album: "rer", artist: "df" } }} />
    )
    expect(component).toMatchSnapshot()
  })
})

describe("Album match div", () => {
  it("Album match div", () => {
    let component = shallow(
      <Album match={{ params: { album: "test", artist: "test" } }} />
    )
    expect(component.find("div.album-main-wrapper").length).toBe(1)
  })
})

describe("Album match TitleH2", () => {
  it("Album check TitleH2", () => {
    let component = shallow(
      <Album match={{ params: { album: "", artist: "" } }} />
    )

    expect(component.find(TitleH2).length).toEqual(1)
  })
})

describe("Album match TitleH2", () => {
  it("Album check TitleH2", () => {
    let component = shallow(
      <Album match={{ params: { album: "", artist: "" } }} />
    )

    component.setState({
      albumName: "Jazz",
      artistName: "Queen",
      image: [],
      inputTrackName: "",
      trackList: [],
    })

    expect(component.find(TitleH2).props()["name"]).toEqual("Jazz")
  })
})

describe.only("Album match TracksListAlbum", () => {
  it("Album check TracksListAlbum", () => {
    let component = shallow(
      <Album match={{ params: { album: "", artist: "" } }} />
    )

    expect(component.find(TracksListAlbum).length).toBe(1)
  })
})

describe("Album match TracksListAlbum", () => {
  it("Album check TracksListAlbum", () => {
    let component = shallow(
      <Album match={{ params: { album: "", artist: "" } }} />
    )

    const artistsList = [
      {
        name: "test-name",
        images: [],
      },
    ]

    component.setState({
      albumName: "Test-name",
      artistName: "Test-artist",
      image: [],
      inputTrackName: "",
      trackList: artistsList,
    })

    expect(component.find(TracksListAlbum).props().list).toBe(artistsList)
  })
})
