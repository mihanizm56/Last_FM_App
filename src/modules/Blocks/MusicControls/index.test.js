import React from 'react'
import { shallow } from 'enzyme'
import MusicControls from '.'

describe('MusicControls', () => {
  it('Find component "music-controls__second-half"', () => {
    expect(
      shallow(<MusicControls />).find('div.music-controls__second-half').length
    ).toBe(1)
  })

  it('Renders correct props', () => {
    let output = shallow(
      <MusicControls
        prevTrack={() => ("test")}
        nextTrack={() => ("test")}
        isPlaying={true}
        callbackForPlaying={() => ("test")} />
    )

    expect(output).toMatchSnapshot()
  })
})
