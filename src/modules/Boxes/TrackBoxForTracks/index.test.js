import React from 'react'
import { shallow } from 'enzyme'
import { TrackBoxForTracks } from '.'

describe('TrackBoxForTracks', () => {
  it('Find component "artist-tracksBlock-wrapper"', () => {
    expect(shallow(<TrackBoxForTracks />).find('div.artist-tracksBlock-wrapper').length).toBe(1)
  })

  it('Renders correct props', () => {
    let output = shallow(<TrackBoxForTracks trackName="test-trackName" artistName="test-trackName" image="test-trackName" />)

    expect(output).toMatchSnapshot()
  })
})
