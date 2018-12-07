import React from 'react'
import { shallow } from 'enzyme'
import { TrackBoxForAlbum } from '.'

describe('TrackBoxForAlbum', () => {
  it('Find component "trackAlbum-wrapper"', () => {
    expect(
      shallow(<TrackBoxForAlbum />).find('div.trackAlbum-wrapper').length
    ).toBe(1)
  })

  it('Renders correct props', () => {
    let output = shallow(
      <TrackBoxForAlbum image="test" trackName="test" />
    )

    expect(output).toMatchSnapshot()
  })
})
