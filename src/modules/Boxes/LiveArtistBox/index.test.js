import React from 'react'
import { shallow } from 'enzyme'
import { LiveArtistBox } from '.'

describe('LiveArtistBox', () => {
  it('Find component "live-music__song-block"', () => {
    expect(shallow(<LiveArtistBox />).find('div.live-music__song-block').length).toBe(1)
  })

  it('Renders correct props', () => {
    let output = shallow(<LiveArtistBox artistName="test-name" songName="test-song-name"/>)

    expect(output).toMatchSnapshot()
  })
})
